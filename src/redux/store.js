import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { financialReducer } from "./reducer";

export const store = createStore(financialReducer, applyMiddleware(thunk));
