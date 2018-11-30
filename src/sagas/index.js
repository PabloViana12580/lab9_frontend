import { fork, all } from 'redux-saga/effects';

import watchTokenCreation from './chismes';

function* mainSaga() {
  yield all([
    fork(watchTokenCreation),
  ]);
}

export default mainSaga;