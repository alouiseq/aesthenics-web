import { GET_WORKOUT_SCHEDULE_PENDING, GET_WORKOUT_SCHEDULE_SUCCESS, GET_WORKOUT_SCHEDULE_FAILED } from '../constants';
import mockData from '../../../mock/data/schedule.json';

export const getWorkoutSchedule = () => async (dispatch: any) => {
  dispatch({ type: GET_WORKOUT_SCHEDULE_PENDING })
  try {
    const data = await mockData.data;
    dispatch({
      type: GET_WORKOUT_SCHEDULE_SUCCESS,
      schedule: data
    });
  } catch(err) {
    dispatch({
      type: GET_WORKOUT_SCHEDULE_FAILED,
      error: err,
    });
  }

  // TODO: Real fetch from API
};
