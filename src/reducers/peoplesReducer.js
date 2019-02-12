import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  peoples: [],
  currentPeople: '',
};

 const peoplesReducer = handleActions(
  {
    [TYPES.GET_PEOPLES]: (state, action) => ({
      ...state,
      peoples: action.payload.results,
    }),
    [TYPES.OPEN_PEOPLE]: (state, action) => ({
      ...state,
      currentPeople: action.payload,
    }),
  },
  initialState
);

export default peoplesReducer;