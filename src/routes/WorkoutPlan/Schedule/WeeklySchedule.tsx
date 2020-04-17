import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import WorkoutSet from '../WorkoutSet/WorkoutSet';
import { getListKey } from '../../../common/utils/utils';
import './schedule.css';

const { Panel } = Collapse;

// export interface IScheduleProps = {
//   week: number,
//   move: string,
//   exercises: object[],
// };

// const backgroundStyle = {
//   background: '#000',
//   color: '#FFF',
// }

const renderPanel = ({ week, id, workouts }: any, activeKeys: string[]) => {
  const isActiveWorkout = !!activeKeys && getListKey(activeKeys, id) > -1;
  return (
    <Panel header={`Week ${week}`} key={id} className="schedule-collapse-panel">
      <WorkoutSet data={workouts} isActive={isActiveWorkout} />
    </Panel>
  );
};

export default ({ data, activeKeys }: any) => {
  const EmptyDiv = styled.div`
    color: #FFF;
    background: #3c1e1e;
    font-style: italic;
  `;

  const emptyState = () => (
    <EmptyDiv>No Schedule Set</EmptyDiv>
  );

  if (!data.length) return emptyState();
  return (
    <div className="schedule-workout">
      <Collapse
        bordered={false}
        defaultActiveKey={activeKeys}
        expandIconPosition="right"
        className="schedule-collapse" 
      >
        {data.map((panel: any) => (
          renderPanel(panel, activeKeys)
        ))}
      </Collapse>
    </div>
  );
};
