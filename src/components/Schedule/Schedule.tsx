import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Modal, Collapse } from 'antd';

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

const Schedule = ({ data }: any) => {
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
              <Workouts data={d.workouts} />
            </Panel>
          )
        })}
      </Collapse>
    </div>
  );
};

interface IExerciseProps {
  id: string,
  value: string,
  reps: string,
  duration: string,
}

const exerciseStyle = {
  display: 'flex',
  background: '#000',
  color: '#FFF',
}

const exerciseChildStyle = {
  marginRight: '10px',
}

const exerciseMainChildStyle = {
  marginRight: '10px',
  flexBasis: '25%',
}

const Workouts = ({ data }: any) => {
  const renderExercises = (exercises: any) => (
    exercises.map((ex: IExerciseProps, index: number) => {
      const { id, value, reps, duration } = ex;
      return (
        <div key={id} style={exerciseStyle}>
          <div style={exerciseChildStyle}>{`${index + 1}.`}</div>
          <div style={exerciseMainChildStyle}>{value}</div>
          <div style={exerciseChildStyle}>{reps}</div>
          <div style={exerciseChildStyle}>{duration}</div>
        </div>
      );
    })
  );

  const activeKey = data.length && data[0].id;
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={[activeKey]}
      expandIconPosition="right"
    >
      {data.map((workout: any) => {
        const { exercises } = workout;
        return (
          <Panel header={`${workout.label}`} key={workout.id}>
           { exercises && renderExercises(exercises)}
          </Panel>
        )
      })}
    </Collapse>
  );
};

export default Schedule;
