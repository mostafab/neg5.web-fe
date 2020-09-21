import React from 'react';
import { Card } from 'antd';

import './PoolCard.less';

const PoolCard = ({
    pool,
    teams = []
}) => {
    return (
        <Card className="PoolCard" title={pool.name}> 
            {
                teams.map(t => (
                    <div key={t.id} className="team-row">{ t.name }</div>
                ))
            }
        </Card>
    )
}

export default PoolCard;
