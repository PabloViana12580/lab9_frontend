import * as types from '../types';

let customId = 0;

export const deleteChisme = id => ({
  type: types.CHISME_DELETED,
  payload: { id },
});

export const newChisme = (
  name, 
  description,
) => ({
  type: types.CHISME_POSTED,
  payload: {
    cusid: customId++,
    id: undefined,
    name, 
    description,
  },
});

export const confirmChisme = id => ({
  type: types.CHISME_CONFIRMED,
  id,
});

export const describeChisme = id => ({
  type: types.CHISME_DESCRIBED,
  id,
});

export const receivedChisme = data => ({
  type: types.CHISME_RECEIVED,
  payload: data
});