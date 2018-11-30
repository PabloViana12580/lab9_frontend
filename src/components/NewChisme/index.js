import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import CustomInput from './Input';

const ChismeTemplate = ({ handleSubmit }) => (
  <div className="ChismeTemplate">
    <form onSubmit = { handleSubmit }>
      <Field
        type="text"
        name="name"
        label="Titulo"
        component={CustomInput}
      />
      <Field
        type="text"
        name="description"
        placeholder="descripcion"
        component="textarea"
      />
      <button type="submit" >
        Crear
      </button>
    </form>
  </div>
);

export default reduxForm({
  form: 'chisme',
  onSubmit(values,dispatch) {
    dispatch(actions.newChisme(
      values.name,
      values.description,
    ));
  },
})(ChismeTemplate);
