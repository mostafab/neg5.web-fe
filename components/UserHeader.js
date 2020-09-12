import React from 'react';
import { PageHeader } from 'antd';

import './UserHeader.less';

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

