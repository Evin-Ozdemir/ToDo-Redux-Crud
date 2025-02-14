import ActionTypes from "./actionTypes";

export const setTodos = (payload) => ({ type: ActionTypes.SET, payload });
export const create = (payload) => ({ type: ActionTypes.CREATE, payload });
export const update = (payload) => ({ type: ActionTypes.UPDATE, payload });
export const remove = (payload) => ({ type: ActionTypes.DELETE, payload });
export const toggle = (payload) => ({ type: ActionTypes.TOGGLE, payload });
