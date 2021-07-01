import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Reducers
import { testReducer } from "./reducers/testReducers";
import { graphicBarReducer } from "./reducers/graphicBarReducers";

// Todo: import custom reducers
const reducer = combineReducers({
  test: testReducer,
  graphicBar: graphicBarReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
