import {compose, createStore, applyMiddleware} from "redux";
// import logger from 'redux-logger';

import {rootReducer} from "./root-reducer";

const loggerMiddleware = (store: any) => (next:any) => (action: any) => {
  if (!action.type) {
    return next(action);
  }
  
  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());
  console.log('next state: ', action);

  next(action);

  console.log('next state: ', action);
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
