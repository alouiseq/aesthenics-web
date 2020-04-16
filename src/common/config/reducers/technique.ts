import { GET_TECHNIQUES_PENDING, GET_TECHNIQUES_SUCCESS, GET_TECHNIQUES_FAILED } from '../constants';

const initialState = {
  status: null,
  techniques: [],
  error: null,
};

export default (state=initialState, action: any) => {
  switch (action.type) {
    case GET_TECHNIQUES_PENDING:
      return { ...state, status: GET_TECHNIQUES_PENDING };
    case GET_TECHNIQUES_SUCCESS:
      return { ...state, status: GET_TECHNIQUES_SUCCESS, techniques: action.techniques };
    case GET_TECHNIQUES_FAILED:
      return { ...state, status: GET_TECHNIQUES_FAILED, error: action.error };
    default:
      return state;
  }
};
