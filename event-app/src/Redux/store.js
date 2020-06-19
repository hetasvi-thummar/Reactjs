import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/events";

const rootReducer = combineReducers({ postsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
