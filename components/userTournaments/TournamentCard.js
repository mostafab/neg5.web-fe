import React from 'react';
import { Link } from 'react-server';

import { Card } from 'antd';

const TournamentCard = ({
    name,
    id,
}) => {
    return (
        <Card title={name} className="TournamentCard" style={{ maxWidth: 300 }}>
            <Link href={`/tournaments/${id}`}>Go To</Link>
        </Card>
    )
}

export default TournamentCard;
