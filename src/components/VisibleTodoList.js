import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "./TodoList";
import { withRouter } from "react-router-dom";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(todo => todo.completed);
    case "active":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || "all")
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
});

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);

export default VisibleTodoList;
