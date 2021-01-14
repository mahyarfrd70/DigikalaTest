import types from '../actionTypes';

export const setAuth = (token) => ({
  type: types.SET_AUTH,
  payload: token,
});
