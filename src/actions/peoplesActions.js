import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import { http } from '../client';
import history from '../history';


export const fetchPeoples = () => async (dispatch, getState) => {
  try {
    const {data} = await http().get('people');
    dispatch(fetchPeoplesSuccess(data));
  } catch (error) {
    throw error;
  }
};

export const fetchPeoplesSuccess = createAction(TYPES.GET_PEOPLES);

export const openPeople = (value) => async (dispatch, getState) => {
  try {
    let url = '';
    if (value.length > 30) {
      url = value.slice(-11);
    } else  if (value.length > 29) {
      url = value.slice(-10);
    } else {
      url = value;
    }
    const urlHistory = url;
    const {data} = await http().get(url);
    history.push(urlHistory);
    dispatch(openPeopleSuccess(data));
  } catch (error) {
    throw error;
  }
};
export const openPeopleSuccess = createAction(TYPES.OPEN_PEOPLE);