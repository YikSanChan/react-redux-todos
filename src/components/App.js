import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Why Router?
// https://stackoverflow.com/questions/43175941/react-router-v4-cannot-read-property-route-of-undefined
const App = () => (
  <div>
    <AddTodo />
    <Router>
      <VisibleTodoList />
    </Router>
    <Footer />
  </div>
);

export default App;
