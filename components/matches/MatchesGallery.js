import React from 'react';
import { Row, Col } from 'antd';

import MatchCard from './MatchCard';

import './MatchesGallery.less';

const MatchesGallery = ({
    matches,
}) => {
    return (
        <div className="MatchesGallery">
            <Row gutter={16}>
                {
                    matches.map(m => (
                        <Col span={8} key={m.id}>
                            <MatchCard match={m} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default MatchesGallery;
