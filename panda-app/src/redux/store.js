import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/news";

const rootReducer = combineReducers({ postsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };