import axios from 'axios'
import {
    all, fork, call, put, throttle,
} from 'redux-saga/effects'
import {
    LOAD_COMPANY_LIST_REQUEST, LOAD_COMPANY_LIST_SUCCESS, LOAD_COMPANY_LIST_FAILURE
} from '../actions/company'

function loadCompanyListApi() {
    return axios.get(`https://ops.wematch.com/da24/partners/?page=1&size=10`)
}

function* loadCompanyList(action) {
    try {
        const result = yield call(loadCompanyListApi, action.data)
        yield put({
            type: LOAD_COMPANY_LIST_SUCCESS,
            data: result.data.data,
        })
    } catch (err) {
        yield put({
            type: LOAD_COMPANY_LIST_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchLoadCompanyList() {
    yield throttle(3000, LOAD_COMPANY_LIST_REQUEST, loadCompanyList)
}

export default function* companySaga() {
    yield all([
        fork(watchLoadCompanyList)
    ])
}

