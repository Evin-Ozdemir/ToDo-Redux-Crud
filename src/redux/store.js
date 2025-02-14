import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

// Birden fazla reducer case onları birleştir
const rootReducer = combineReducers({
  todoReducer,
});

// Store'u oluştur
const store = createStore(rootReducer);

// Projeye tanıtmak için export et
export default store;
