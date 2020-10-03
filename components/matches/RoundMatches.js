import React from 'react';
import { Typography } from 'antd';

import MatchesGallery from './MatchesGallery';

const { Title } = Typography;

const RoundMatches = ({
    matches,
    round
}) => {
    return (
        <div className="RoundMatches">
            <Title level={3}>Round { round }</Title>
            <MatchesGallery matches={matches} />
        </div>
    )
}

export default RoundMatches;
