import React from 'react';
// import styled from 'styled-components';
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

export default ({ data }: any) => {
  // TODO: should probably come from API
  const activeKey = data[0].id;
  return (
    <div className="schedule-workout">
      <Collapse
        bordered={false}
        defaultActiveKey={[activeKey]}
        expandIconPosition="right"
        className="schedule-collapse" 
      >
        {data.map((d: any) => {
          return (
            <Panel header={`Week ${d.week}`} key={d.id} className="schedule-collapse-panel">
              <WorkoutSet data={d.workouts} />
            </Panel>
          )
        })}
      </Collapse>
    </div>
  );
};
