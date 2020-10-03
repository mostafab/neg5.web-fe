import React from 'react';
import { Col, Row } from 'antd';

import TeamCard from './TeamCard';

import './TeamsGallery.less';

const TeamsGallery = ({
    teams,
    onSavePlayer,
    onUpdateTeam,
}) => {
    return (
        <div className="TeamsGallery">
            <Row gutter={16}>
                {
                    teams.map(t => (
                        <Col span={6} key={t.id}>
                            <TeamCard
                                team={t}
                                onSavePlayer={onSavePlayer}
                                onSaveTeam={onUpdateTeam}
                                editable
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default TeamsGallery;
