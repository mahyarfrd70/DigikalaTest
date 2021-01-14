import types from '../actionTypes';

const initState = {
  token: null,
  loading: true,
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.SET_AUTH:
      return {
        token: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
