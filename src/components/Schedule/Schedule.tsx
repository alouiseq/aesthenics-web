import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Modal, Collapse } from 'antd';

// import { aggregateList } from '../../common/utils/utils';

const { Panel } = Collapse;

// export interface IScheduleProps = {
//   week: number,
//   move: string,
//   exercises: object[],
// };

const Schedule = ({ data }: any) => {
  return (
    <>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        {data.map((d: any) => {
          return (
            <Panel header={`Week ${d.week}`} key={d.id}>
              <Workout data={d} />
            </Panel>
          )
        })}
      </Collapse>
    </>
  );
};

const Workout = ({ data }: any) => {
  const { exercises } = data;
  debugger
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      {exercises.map((ex: any) => {
        return (
          <Panel header={`${d.move}`} key={d.move}>
              return <div key={ex.value}>{ex.value}</div>
            })}
          </Panel>
        )
      })}
    </Collapse>
  );
};

export default Schedule;
