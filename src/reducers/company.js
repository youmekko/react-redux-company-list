import produce from 'immer'
import {
    LOAD_COMPANY_LIST_REQUEST, LOAD_COMPANY_LIST_SUCCESS, LOAD_COMPANY_LIST_FAILURE
} from '../actions/company'

const initialState = {
    "loadCompanyListlodading": false,
    "loadCompanyListDone": false,
    "loadCompanyListError": false,
    "data": []
}

const companyReducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type) {
        case LOAD_COMPANY_LIST_REQUEST: 
            draft.loadCompanyListlodading = true
            draft.loadCompanyListDone = false
            draft.loadCompanyListError = false
            break
        case LOAD_COMPANY_LIST_SUCCESS: 
            draft.loadCompanyListlodading = false
            draft.loadCompanyListDone = true
            draft.loadCompanyListError = false
            draft.data = draft.data.concat(action.data)
            break
        case LOAD_COMPANY_LIST_FAILURE: 
            draft.loadCompanyListlodading = false
            draft.loadCompanyListDone = false
            draft.loadCompanyListError = true
            break
        default:
            break
    }
})

export default companyReducer