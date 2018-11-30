import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CHISME_POSTED:
      return {
        ...state,
        [action.payload.cusid]:{
          ...action.payload,
        }
      }
    case types.CHISME_DELETED: {
      const changeState = { ...state };
      delete changeState[action.payload.cusid];
      return changeState;
    }
    case types.CHISME_CONFIRMED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...newState[action.payload.id],
        isConfirmed: true,
      };
      return newState;
    }
    case types.CHISME_RECEIVED:
      return action.payload;
    default:
      return state;
  }
};


export default combineReducers({
  byId,
});


export const getChisme = (state, id) => state.byId[id];