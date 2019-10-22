import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_TEST } from '../types';
import { testActionSuccess, testActionFaliure } from '../actions';
import { fetchData } from '../../api';

// const { testActionSuccess, testActionFaliure } = actions;

function* getTest(action) {
  try {
    console.log(action);
    const data = yield call(fetchData);
    yield put(testActionSuccess(data));
  } catch (e) {
    yield put(testActionFaliure(e));
  }
}

export function* userSaga1() {
  yield takeEvery(GET_TEST, getTest);
}
