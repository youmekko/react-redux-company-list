import React from 'react'
import PropTypes from 'prop-types'
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CardWrapper, CompanyLevel, CompanyTitle } from './styles/style'

const { Meta } = Card
function Company({ company }) {
    return (
        <>
            <CardWrapper>
                <Meta
                    avatar={
                        <Avatar size={64} icon={<UserOutlined />} />
                    }
                    title={
                        <>
                        <CompanyLevel>
                            {company.level}등급
                        </CompanyLevel>
                        <span>
                            &nbsp;{company.company}
                        </span>
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
    company: PropTypes.object.isRequired
}

export default Company
