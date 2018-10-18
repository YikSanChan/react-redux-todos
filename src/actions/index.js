import { v4 } from "uuid";
import * as api from "../api";

export const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

// dispatch requestTodos() when start fetching, and receiveTodos() when finish fetching
export const fetchTodos = filter => dispatch => {
  dispatch(requestTodos(filter));
  return api
    .fetchTodos(filter)
    .then(response => dispatch(receiveTodos(filter, response)));
};

const requestTodos = filter => ({
  type: "REQUEST_TODOS",
  filter
});
