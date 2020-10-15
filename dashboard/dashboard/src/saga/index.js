import { all } from 'redux-saga/effects'
import {loginsuccess, userSaga} from './usersaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginsuccess()
    ])
}