import React from 'react';
import { PageHeader } from 'antd';

import './UserHeader.less';

const UserHeader = ({
    currentUser,
    title,
    subtitle,
}) => {
    return (
        <PageHeader
            className="site-page-header UserHeader"
            title={title}
            subTitle={subtitle}
        />
    )
}

export default UserHeader;

