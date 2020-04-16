import { GET_WORKOUT_SCHEDULE_PENDING, GET_WORKOUT_SCHEDULE_SUCCESS, GET_WORKOUT_SCHEDULE_FAILED } from '../constants';

const initialState = {
  status: null,
  schedule: [],
  error: null,
};

export default (state=initialState, action: any) => {
  switch (action.type) {
    case GET_WORKOUT_SCHEDULE_PENDING:
      return { ...state, status: GET_WORKOUT_SCHEDULE_PENDING };
    case GET_WORKOUT_SCHEDULE_SUCCESS:
      return { ...state, status: GET_WORKOUT_SCHEDULE_SUCCESS, schedule: action.schedule };
    case GET_WORKOUT_SCHEDULE_FAILED:
      return { ...state, status: GET_WORKOUT_SCHEDULE_FAILED, error: action.error };
    default:
      return state;
  }
};
