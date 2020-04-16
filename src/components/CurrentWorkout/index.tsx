import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTechniques } from '../../common/config/actions/technique';
import { getWorkoutSchedule } from '../../common/config/actions/workout';
import CustomWorkout from './CustomWorkout';

interface IMoveProps {
  id: string,
  key: string,
  value: string,
};

interface IScheduleProps {
  id: string,
  week: number,
  workouts: object[],
}

// import ButtonLink from '../../common/components/ButtonLink/ButtonLink';

const CurrentWorkout = ({ getTechniques, techniques, getWorkoutSchedule, workoutSchedule }: any) => {
  const [selectedMove, setMove] = useState<IMoveProps | undefined>(undefined);
  const [currentSchedule, setSchedule] = useState<IScheduleProps | null>(null);

  useEffect(() => {
    getTechniques();
  }, [getTechniques]);


  // TODO: data should come from API
  // const moves = techniques.data;
  // const schedule = workoutSchedule.data;

  useEffect(() => {
    if (workoutSchedule) setSchedule(workoutSchedule[0]);
  }, [workoutSchedule]);

  const handlePicker = () => {
    // TODO: this logic should go to utils
    const len = techniques.length;
    const newMove = techniques[Math.round(Math.random()*len)];
    setMove(newMove);
  };

  const handleDateChange = (changed: string) => () => {
    const foundIndex = workoutSchedule.findIndex((sch: any) => currentSchedule && sch.week === currentSchedule.week);
    if (changed === 'before' && workoutSchedule[foundIndex - 1]) {
      setSchedule(workoutSchedule[foundIndex - 1]);
    } else if (changed === 'after' && workoutSchedule[foundIndex + 1]) {
      setSchedule(workoutSchedule[foundIndex + 1]);
    }
  }

  const handleSubmit = () => {
    console.log('SUCCESS');
  }

  const handleSubmitFailed = () => {
    console.log('FAILED');
  }

  return (
    <>
      <CustomWorkout
        onHandlePicker={handlePicker}
        onHandleDateChange={handleDateChange}
        onHandleSubmit={handleSubmit}
        onHandleSubmitFailed={handleSubmitFailed}
        techniques={techniques}
        move={selectedMove}
        schedule={currentSchedule}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    techniques: state.program.techniques,
    workoutSchedule: state.workout.schedule,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getTechniques: () => dispatch(getTechniques()),
  getWorkoutSchedule: () => dispatch(getWorkoutSchedule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWorkout);
