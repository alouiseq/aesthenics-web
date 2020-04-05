import React from 'react';
import { Layout } from 'antd';

import Schedule from '../../components/Schedule/Schedule';
import workoutSchedule from '../../mock/data/schedule.json';

const { Content } = Layout;

const Workouts = () => {
  const schedule = workoutSchedule.data;

  return (
    <Layout>
      <Content style={{backgroundColor: '#000'}}>
        <Schedule data={schedule} />
      </Content>
    </Layout>
  );
};

export default Workouts;