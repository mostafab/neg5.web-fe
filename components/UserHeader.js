import React from 'react';
import { PageHeader } from 'antd';

const UserHeader = ({
    currentUser,
    title
}) => {
    return (
        <PageHeader
            className="site-page-header UserHeader"
            title={title}
        />
    )
}

export default UserHeader;

