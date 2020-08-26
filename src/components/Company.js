import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CardWrapper, CompanyLevel, CompanyName, CompanyTitle } from './styles/style'

const { Meta } = Card
function Company({ company, onChangeCheckbox }) {
    return (
        <>
            <CardWrapper>
                <Meta
                    avatar={
                        <Avatar size={64} icon={<UserOutlined />} />
                    }
                    title={
                        <>
                        <Checkbox onChange={onChangeCheckbox} value={company} checked={company.checked} />
                        <CompanyLevel>
                            {company.level}등급
                        </CompanyLevel>
                        <CompanyName>
                            {company.company}
                        </CompanyName>
                        </>
                    }
                    description={
                        <>
                            <CompanyTitle>
                                {company.title}
                            </CompanyTitle>
                            {company.is_full && <p>마감 되었습니다.</p>}
                        </>
                    }
                />
            </CardWrapper>
        </>
    )
}

Company.prototypes = {
    company: PropTypes.object.isRequired,
    onChangeCheckbox: PropTypes.func.isRequired
}

export default Company
