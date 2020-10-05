import { combineReducers } from 'redux';
import { postReducer } from './postReducer';

export const Reducers = combineReducers({
  // Chave dos reducers: Reducer
  tasks: postReducer
});