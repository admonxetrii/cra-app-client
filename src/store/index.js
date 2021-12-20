import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
