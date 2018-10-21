const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;

const ALGOLIA_INDEX_NAME = "todos";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onCreateOrUpdateTodo = functions.firestore
  .document("todos/{todoId}")
  .onWrite((change, context) => {
    const todo = change.after.data();
    todo.objectID = context.params.todoId;
    console.log("Todo to be written:", todo);
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index
      .saveObject(todo)
      .then(() => {
        console.log("Todo is imported into Algolia");
      })
      .catch(error => {
        console.error("Error when importing todo into Algolia", error);
      });
  });
