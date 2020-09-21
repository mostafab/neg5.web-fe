import React from 'react';
import { Card } from 'antd';

const PoolCard = ({
    pool,
    teams = []
}) => {
    return (
        <Card className="PoolCard" title={pool.name}> 

        </Card>
    )
}

export default PoolCard;
