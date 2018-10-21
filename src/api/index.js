import * as firebase from "firebase";
import { firebaseApp } from "../configureFirebase";

const db = firebase.firestore(firebaseApp);
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const fetcher = filter => xs => {
  switch (filter) {
    case "all":
      return xs;
    case "completed":
      return xs.filter(x => x.completed);
    case "active":
      return xs.filter(x => !x.completed);
    default:
      return xs;
  }
};

export const fetchTodos = filter => {
  return db
    .collection("todos")
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      })
    )
    .then(todos => {
      return fetcher(filter)(todos);
    });
};

export const addTodo = text => {
  const todo = {
    text,
    completed: false
  };
  return db
    .collection("todos")
    .add(todo)
    .then(docRef => {
      return {
        id: docRef.id,
        ...todo
      };
    });
};

export const toggleTodo = id => {
  const todoDocRef = db.collection("todos").doc(id);
  return db.runTransaction(txn => {
    return txn.get(todoDocRef).then(todoDoc => {
      if (!todoDoc.exists) {
        throw new Error("Document does not exist!");
      }
      const completed = !todoDoc.data().completed;
      txn.update(todoDocRef, { completed });
      return {
        id: todoDoc.id,
        ...todoDoc.data(),
        completed
      };
    });
  });
};
