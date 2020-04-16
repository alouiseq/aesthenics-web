import React from 'react';
// import styled from 'styled-components';
import { Collapse } from 'antd';

const { Panel } = Collapse;

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

export default ({ data }: any) => {
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
