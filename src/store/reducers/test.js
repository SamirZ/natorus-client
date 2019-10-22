import * as ActionTypes from '../types';

const initialState = { isLoading: 0, data: {}, error: undefined };

export const test = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TEST:
      return {
        ...state,
        isLoading: state.isLoading + 1
      };
    case ActionTypes.GET_TEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: state.isLoading - 1
      };
    case ActionTypes.GET_TEST_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: state.isLoading - 1
      };
    default:
      return initialState;
  }
};
