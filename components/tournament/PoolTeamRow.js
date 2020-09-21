import React from 'react';
import { DragSource } from 'react-dnd'

import { DraggableTypes } from './../../util/drag';

import './PoolTeamRow.less';

const PoolTeamRow = ({
    team,
    // Not used directly in the component but used by the drag handlers
    phaseId,
    connectDragSource
}) => {
    return connectDragSource(
        <div
            className="PoolTeamRow"
        >
            { team.name }
        </div>
    )
}

const spec = {
    beginDrag(props) {
        return {
            phaseId: props.phaseId,
            teamId: props.team.id,
        }
    },
}

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }

export default DragSource(
    ({ phaseId }) => DraggableTypes.teamRow(phaseId),
    spec,
    collect,
)(PoolTeamRow);

