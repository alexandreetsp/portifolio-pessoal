import { combineReducers } from 'redux';
import { navReducer } from './navReducer/nav.reducer';

export const rootReducer = combineReducers({
  navegator: navReducer,
});