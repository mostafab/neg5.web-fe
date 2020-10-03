import React from 'react';
import { Card } from 'antd';
import { DropTarget } from 'react-dnd';

import { DraggableTypes } from './../../util/drag';
import PoolTeamRow from './PoolTeamRow';

import './PoolCard.less';

const PoolCard = ({
    pool,
    phaseId,
    teams = [],
    onDropTeam,
    isOver,
    connectDropTarget
}) => {
    return connectDropTarget(
        <div>
            <Card
                className={`PoolCard ${isOver ? 'hover' : ''}`}
                title={pool.name}
            >
                {
                    teams.map(t => <PoolTeamRow team={t} key={t.id} phaseId={phaseId} />)
                }
            </Card>
        </div>
    )
}

const targetSpec = {
    drop(props, monitor) {
        const source = monitor.getItem();
        const fullData = {
            phaseId: source.phaseId,
            teamId: source.teamId,
            targetPoolId: props.pool.id || null,
        }
        props.onDropTeam(fullData);
    }
}

function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
    }
  }
  

export default DropTarget(
    ({ phaseId }) => DraggableTypes.teamRow(phaseId),
    targetSpec,
    collect,
)(PoolCard);


