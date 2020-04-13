import { GET_EXERCISES_PENDING, GET_EXERCISES_SUCCESS, GET_EXERCISES_FAILED } from './constants';

const initialState = {
  status: null,
  exercises: [],
  error: null,
};

export default (state=initialState, action: any) => {
  switch (action.type) {
    case GET_EXERCISES_PENDING:
      return { ...state, status: GET_EXERCISES_PENDING };
    case GET_EXERCISES_SUCCESS:
      return { ...state, status: GET_EXERCISES_SUCCESS, exercises: action.exercises };
    case GET_EXERCISES_FAILED:
      return { ...state, status: GET_EXERCISES_FAILED, error: action.error };
    default:
      return state;
  }
};
