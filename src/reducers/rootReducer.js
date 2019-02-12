import { combineReducers } from 'redux';
import peoplesReducer from './peoplesReducer';

export const rootReducer = combineReducers ({
  peoples: peoplesReducer,
});