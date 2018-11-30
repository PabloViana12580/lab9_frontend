import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as apiChismes from '../api';
import * as types from '../types';
import * as actions from '../actions';

function* deleteChismeGenerator(action) {
  const {
    payload: {
      id
    }
  } = action;

  try {
    yield call(
      apiChismes.deleteChisme,
      id
    );
    yield window.location.reload();
  } catch(e) {
    console('No se ha podido borrar el chisme')
  }
}

function* newChismeGenerator(action) {
  const {
    payload: {
      name,
      description,
    }
  } = action;
  try {
    const apiCall = yield call(
      apiChismes.newChismePost,
      name,
      description,
    );
    yield put(actions.confirmChisme(apiCall.id));
    yield window.location.reload();
  } catch(e) {
    console.log('El chisme no se ha creado')
  }
}

function* getApiData(action) {
  try {
    const data = yield call(apiChismes.getChismes);
    yield put(actions.receivedChisme(data));
  }catch (e){
    console.log(e);
  }
}

export function* watchTokenCreation() {
  yield takeEvery(
    types.CHISME_POSTED,
    newChismeGenerator,
  );
  yield takeEvery(
    types.CHISME_DELETED,
    deleteChismeGenerator,
  );
  yield takeEvery(
    types.CHISME_DESCRIBED,
    getApiData,
  );
}

export default watchTokenCreation;