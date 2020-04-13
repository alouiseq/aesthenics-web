import { GET_TECHNIQUES_PENDING, GET_TECHNIQUES_SUCCESS, GET_TECHNIQUES_FAILED } from './constants';
import techniques from '../../mock/data/techniques.json';

export const getTechniques = () => async (dispatch: any) => {
  dispatch({ type: GET_TECHNIQUES_PENDING })
  try {
    const data = await techniques.data;
    dispatch({
      type: GET_TECHNIQUES_SUCCESS,
      techniques: data
    });
  } catch(err) {
    dispatch({
      type: GET_TECHNIQUES_FAILED,
      error: err,
    });
  }

  // TODO: Real fetch from API
};
