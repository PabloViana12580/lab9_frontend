import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';


const Chisme = ({ chisme, onDelete }) => (
  <li>
    {'Lo ultimo:  '}
    { chisme.id }
    { ': ' }
    { chisme.name }
    { ' ' }
    <Link to={`${chisme.id}`}>
        <button> Ver mas</button>
    </Link>
    <a onClick={ onDelete }>
      { 'borrar' }
    </a>
  </li>
);

export default connect(
  (state, { chisme }) => ({
    ...selectors.getChisme(state, chisme.id),
  }),
  (dispatch, { chisme }) => ({
    onDelete() {
      dispatch(actions.deleteChisme(chisme.id)); 
    },
  }),
)(Chisme);