import { all, fork } from 'redux-saga/effects';

import * as testSagas from './test';

export default function* rootSaga() {
  yield all([...Object.values(testSagas)].map(fork));
}
