import produce from 'immer'
import {
    LOAD_COMPANY_LIST_REQUEST, LOAD_COMPANY_LIST_SUCCESS, LOAD_COMPANY_LIST_FAILURE, 
    CHECKED_COMPANY, UNCHECKED_COMPANY
} from '../actions/company'

const initialState = {
    "loadCompanyListlodading": false,
    "loadCompanyListDone": false,
    "loadCompanyListError": false,
    "data": [],
    "checkedData": {
        "N": [],
        "S": [],
        "A": [],
        "B": []
    }
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
            draft.data = draft.data.concat(action.data.map((company) => {
                company.checked = false
                return company
            }))
            break
        case LOAD_COMPANY_LIST_FAILURE: 
            draft.loadCompanyListlodading = false
            draft.loadCompanyListDone = false
            draft.loadCompanyListError = true
            break
        case CHECKED_COMPANY:
            if (!draft.checkedData[action.data.level].length) {
                draft.checkedData[action.data.level].push(action.data.id)
                draft.data.find((data) => data.id === action.data.id).checked = true
            }
            break
        case UNCHECKED_COMPANY: 
            if (draft.checkedData[action.data.level][0] === action.data.id) {
                draft.checkedData[action.data.level] = []
                draft.data.find((data) => data.id === action.data.id).checked = false
            }
            break
        default:
            break
    }
})

export default companyReducer