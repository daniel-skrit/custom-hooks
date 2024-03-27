export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = ABC no esta implememtada");
    case "Add Todo":
      return [...initialState, action.payload];
    case "Delete Todo":
      return initialState.filter((todo) => todo.id != action.payload);
    case "Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
