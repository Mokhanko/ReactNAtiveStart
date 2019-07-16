import { put, fork, all, takeEvery, call  } from 'redux-saga/effects';
import { changeName, changeField, changePassword, changeValidName, changeValidPassword } from "./reducer";

function* inputSaga(payload) {
  switch(payload.field){
    case 'name':
      const _name = 'Admin';
      yield put(changeName(payload.value));
      if (_name === payload.value) {
        yield put(changeValidName(true));
      }
      break;
    case 'password':
      const _pass = '123';
      yield put(changePassword(payload.value));
      if (_pass === payload.value) {
        yield put(changeValidPassword(true));
      }
      break;
    default:
      break;
  }
}


function* watchInput(){
  yield takeEvery(changeField, inputSaga);
}

export default watchInput;
