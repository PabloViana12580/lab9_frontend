import { combineReducers } from 'redux';
import chisme, * as fromChismes from './chisme';
import { reducer as formReducer } from 'redux-form';


const reducer = combineReducers({
	chisme,
	form: formReducer
});

export default reducer;

export const getChisme = (state, id) =>
  fromChismes.getChisme(state.chisme, id);