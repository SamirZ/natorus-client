import * as ActionTypes from '../types';

export function testAction() {
  return {
    type: ActionTypes.GET_TEST
  };
}

export function testActionSuccess(data) {
  return {
    type: ActionTypes.GET_TEST_SUCCESS,
    payload: {
      ...data
    }
  };
}

export function testActionFaliure(error) {
  return {
    type: ActionTypes.GET_TEST_FAILURE,
    payload: {
      error
    }
  };
}
