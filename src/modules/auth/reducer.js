import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  name: '',
  password: '',
  validName: false,
  validPassword: false
});

export const changeName = createAction('CHANGE_NAME', name => ({ name }));

export const changePassword = createAction('CHANGE_PASSWORD', password => ({ password }));

export const changeValidName = createAction('CHANGE_VALID_NAME', validName => ({ validName }));

export const changeValidPassword = createAction('CHANGE_VALID_PASSWORD', validPassword => ({
  validPassword
}));

export const changeField = createAction('CHANGE_FIELD', (field, value) => ({
  field,
  value
}));

export default handleActions({
    [changeName]: (state, { payload }) => state.set('name', payload.name),
    [changePassword]: (state, { payload }) => state.set('password', payload.password),
    [changeValidName]: (state, { payload }) => state.set('validName', payload.validName),
    [changeValidPassword]: (state, { payload }) => state.set('validPassword', payload.validPassword)
  },
  initialState
)