import React, { Fragment } from 'react';
import { Empty, Button } from 'antd';

import './NoTeams.less';

const NoTeams = ({
    onAdd,
}) => {
    const description = (
        <Fragment>
            <span>This tournament has no teams yet.</span>
            <br />
            <Button type="primary" onClick={onAdd}> Add a team</Button>
        </Fragment>
    )
    return (
        <div className="NoTeams">
            <Empty
                className="message"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={description}
            />
        </div>
    )
}

export default NoTeams;
