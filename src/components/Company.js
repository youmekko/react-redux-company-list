import React from 'react'
import PropTypes from 'prop-types'
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card

function Company({ company }) {
    return (
        <>
            <Card style={{ width: '100%', marginBottom: 15 }}>
                <Meta
                    avatar={
                        <Avatar size={64} icon={<UserOutlined />} />
                    }
                    title={
                        <>
                        <span style={{ color: '#1672f7', fontWeight: 'bold' }}>
                            {company.level}등급
                        </span>
                        <span>
                            &nbsp;{company.company}
                        </span>
                        </>
                    }
                    description={
                        <>
                            <p style={{ color: '#000' }}>{company.title}</p>
                            {company.is_full && <p>마감 되었습니다.</p>}
                        </>
                    }
                />
            </Card>
        </>
    )
}

Company.prototypes = {
    company: PropTypes.object.isRequired
}

export default Company
