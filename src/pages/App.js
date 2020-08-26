import React, { useRef, useEffect, useCallback } from 'react'
import Company from '../components/Company'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_COMPANY_LIST_REQUEST, CHECKED_COMPANY, UNCHECKED_COMPANY } from '../actions/company'
import { Row, Col } from 'antd'

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

    const onChangeCheckbox = useCallback((e) => {
        let { checked, value } = e.target

        console.log(checked)

        if (checked) {
            dispatch({
                type: CHECKED_COMPANY,
                data: value
            })
        } else {
            dispatch({
                type: UNCHECKED_COMPANY,
                data: value
            })
        }
    },[])

    return (
            <Row justify="center">
                <Col lg={12} xs={24}>
                    {data.map((company) => 
                        <Company key={company.id} 
                            company={company} 
                            loading={loadCompanyListlodading}
                            onChangeCheckbox={onChangeCheckbox} />
                    )}
                </Col>
            </Row>
    )
}

export default App
