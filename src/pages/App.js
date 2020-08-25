import React, { useRef, useEffect } from 'react'
import Company from '../components/Company'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_COMPANY_LIST_REQUEST } from '../actions/company'

function App() {
    const page = useRef(1)
    const dispatch = useDispatch()
    const { data, loadCompanyListlodading } = useSelector((state) => state.company)

    useEffect(() => {
        dispatch({
            type: LOAD_COMPANY_LIST_REQUEST,
            data: page.current,
        })
    }, [])

    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (data[data.length - 1].has_next && !loadCompanyListlodading) {
                    dispatch({
                        type: LOAD_COMPANY_LIST_REQUEST,
                        data: page.current += 1,
                    })
                }
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [data, loadCompanyListlodading])

    return (
        <>
            {data.map((company) => <Company key={company.id} company={company} />)}
        </>
    )
}

export default App
