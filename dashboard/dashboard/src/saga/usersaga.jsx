import { push } from 'connected-react-router';
import { useHistory } from 'react-router-dom';
import { apply, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { logincheckrequest } from '../api/user'
import { LOGIN_CLICK, LOGIN_FAILURE, LOGIN_SUCCESS } from '../types/usertypes';

function* loginsuccessrequest() {
   console.log('welocome')
   return yield call(push, ('/dashboard'));
}

function* fetchUsers(action) {
   try {
      const users = yield call(logincheckrequest);
      yield put({ type: LOGIN_SUCCESS, users: users });
   } catch (e) {
      yield put({ type: LOGIN_FAILURE, message: e.message });
   }


}
export function* userSaga() {
   yield takeEvery(LOGIN_CLICK, fetchUsers);
}

export function* loginsuccess() {

   yield takeEvery(LOGIN_SUCCESS, loginsuccessrequest)
}