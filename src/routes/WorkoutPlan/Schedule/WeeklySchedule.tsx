import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import WorkoutSet from '../WorkoutSet/WorkoutSet';

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

const renderPanel = ({ week, id, workouts }: any) => (
  <Panel header={`Week ${week}`} key={id} className="schedule-collapse-panel">
    <WorkoutSet data={workouts} />
  </Panel>
);

export default ({ data, active }: any) => {
  const EmptyDiv = styled.div`
    color: #FFF;
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
        defaultActiveKey={active}
        expandIconPosition="right"
        className="schedule-collapse" 
      >
        {data.map((panel: any) => (
          renderPanel(panel)
        ))}
      </Collapse>
    </div>
  );
};
