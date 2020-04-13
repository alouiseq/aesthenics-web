import { GET_EXERCISES_PENDING, GET_EXERCISES_SUCCESS, GET_EXERCISES_FAILED } from './constants';
import mockData from '../../mock/data/exercises.json';
import mockGif from '../../mock/images/pistolSquat.gif';
import { ExerciseProps } from '../../components/Exercises/Exercises';

export const getExercises = () => async (dispatch: any) => {
  dispatch({ type: GET_EXERCISES_PENDING })
  try {
    const data = await mockData.data.map((d: ExerciseProps) => {
      d.imageUrl = mockGif;
      return d;
    });
    dispatch({
      type: GET_EXERCISES_SUCCESS,
      exercises: data
    });
  } catch(err) {
    dispatch({
      type: GET_EXERCISES_FAILED,
      error: err,
    });
  }

  // TODO: Real fetch from API
};
