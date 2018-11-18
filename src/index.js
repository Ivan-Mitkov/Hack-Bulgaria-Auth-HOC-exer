import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import App from "App";
import commentsReducer from "reducers/comments";
import authReducer from "reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(app(), document.querySelector("#root"));
