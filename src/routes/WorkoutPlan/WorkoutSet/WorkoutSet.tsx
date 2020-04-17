import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import { getListKeys } from '../../../common/utils/utils';
import './workoutSet.css';

const { Panel } = Collapse;

interface IExerciseProps {
  id: string,
  value: string,
  reps: string,
  duration: string,
}

const exerciseStyle = {
  display: 'flex',
  background: '#0b170b',
  color: '#FFF',
}

const exerciseChildStyle = {
  marginRight: '10px',
}

const exerciseMainChildStyle = {
  marginRight: '10px',
  flexBasis: '25%',
}

const renderPanel = ({ id, label, exercises}: any) => (
  <Panel header={`${label}`} key={id} className="workout-set-collapse-panel">
    { exercises && renderExercises(exercises)}
  </Panel>
);

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

export default ({ data, isActive }: any) => {
  const EmptyDiv = styled.div`
    color: #FFF;
    background: #3c1e1e;
    font-style: italic;
  `;

  const emptyState = () => (
    <EmptyDiv>No Workout Set</EmptyDiv>
  );

  if (!data.length) return emptyState();

  const activeKeys = data && isActive && getListKeys(data) || []; 
  return (
    <div className="workout-set">
      <Collapse
        bordered={false}
        defaultActiveKey={activeKeys}
        expandIconPosition="right"
        className="workout-set-collapse"
      >
        {data.map((workout: any) => {
          return renderPanel(workout);
        })}
      </Collapse>
    </div>
  );
};
