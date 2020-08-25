import React, { useEffect } from 'react'
import Company from '../components/Company'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_COMPANY_LIST_REQUEST } from '../actions/company'

function App() {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.company)

    useEffect(() => {
        dispatch({
            type: LOAD_COMPANY_LIST_REQUEST,
        })
    }, [])

    return (
        <>
            {data.map((company) => <Company key={company.id} company={company} />)}
        </>
    )
}

export default App
