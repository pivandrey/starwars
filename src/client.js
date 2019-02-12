import axios from 'axios';
import * as TYPES from './types';

export const http = function() {
  
  const instance = axios.create({
    baseURL: TYPES.API_BASE_URL,
  });

  return instance;
};