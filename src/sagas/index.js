import { all, fork } from 'redux-saga/effects'
import companySaga from '../sagas/company'

export default function* rootSaga() {
    yield all([
        fork(companySaga)
    ])
}