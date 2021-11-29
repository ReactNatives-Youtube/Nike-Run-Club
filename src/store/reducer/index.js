// Main Reducer for redux
import {SAVE_CURRENT_RUN, SAVE_RUN_TO_DB} from '../actions/index';
const initialState = {
  currentRun: {
    distance: 0,
    time: 0,
  },
  previousRuns: [],
  totalKms: 0,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_CURRENT_RUN:
      state.currentRun = actions.data;
      break;
    case SAVE_RUN_TO_DB:
      state.previousRuns.unshift(actions.data);
      break;
  }
  return state;
};

export default reducer;
