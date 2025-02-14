import ActionTypes from "../actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET:
      return { todos: action.payload };

    case ActionTypes.CREATE:
      const newTodos = [...state.todos, action.payload];
      return { todos: newTodos };

    case ActionTypes.DELETE:
      // Payload ile gelen id'li elemanı diziden kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { todos: filtred };

    case ActionTypes.TOGGLE:
      // Nesnenin isDone değerini tersine çevir
      const updated = { ...action.payload, isDone: !action.payload.isDone };
      // Dizideki eski nesnenin yerine yenisini koy
      const updateTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );
      return { todos: updateTodos };

    case ActionTypes.UPDATE:
      const editedTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { todos: editedTodos };

    default:
      return state;
  }
};

export default todoReducer;
