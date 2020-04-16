import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import Schedule from './Schedule';
// import workoutSchedule from '../../mock/data/schedule.json';
import { getWorkoutSchedule } from '../../common/config/actions/workout';

const { Content } = Layout;

const Workouts = ({ getWorkoutSchedule, workoutSchedule }: any) => {
  useEffect(() => {
    getWorkoutSchedule();
  }, [getWorkoutSchedule]);

  return (
    <Layout>
      <Content style={{backgroundColor: '#000'}}>
        {workoutSchedule.length && <Schedule data={workoutSchedule} />}
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    workoutSchedule: state.workout.schedule,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWorkoutSchedule: () => dispatch(getWorkoutSchedule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);