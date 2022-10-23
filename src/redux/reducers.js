import {SET_COUNT} from './types';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
