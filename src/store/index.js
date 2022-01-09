import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
