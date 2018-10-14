const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;

// selector
// In the reducers, the state argument corresponds to the state of this particular reducer, so we will follow the same
// convention for selectors.
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all":
      return state;
    case "completed":
      return state.filter(todo => todo.completed);
    case "active":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
