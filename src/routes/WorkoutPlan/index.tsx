import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import WeeklySchedule from './Schedule/WeeklySchedule';
import { getWorkoutSchedule } from '../../common/config/actions/workout';
import { getListKeys } from '../../common/utils/utils';

const { Content } = Layout;

const WorkoutPlan = ({ getWorkoutSchedule, workoutSchedule }: any) => {
  useEffect(() => {
    getWorkoutSchedule();
  }, [getWorkoutSchedule]);

  // TODO: This should come from the custom workout section - side panel
  const activeScheduleKeys = workoutSchedule && getListKeys(workoutSchedule);

  return (
    <Layout>
      <Content style={{backgroundColor: '#000'}}>
        <WeeklySchedule data={workoutSchedule} activeKeys={activeScheduleKeys} />
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPlan);