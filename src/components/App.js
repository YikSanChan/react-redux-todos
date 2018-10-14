import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";
import React from "react";

const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || "all"} />
    <Footer />
  </div>
);

export default App;
