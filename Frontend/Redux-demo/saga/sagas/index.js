/* eslint-disable no-constant-condition */

import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1e3);
  yield put({ type: 'INCREMENT' });
}

export default function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// // notice how we now only export the rootSaga
// // single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([watchIncrementAsync()]);
// }
