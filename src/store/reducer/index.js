// Main Reducer for redux
import {
  SAVE_CURRENT_RUN,
  SAVE_RUN_TO_DB,
  GET_USER_DATA,
} from '../actions/index';
const initialState = {
  currentRun: {
    distance: 0,
    time: 0,
  },
  previousRuns: [],
  totalKms: 0,
  userName: '',
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_CURRENT_RUN:
      state.currentRun = actions.data;
      break;
    case SAVE_RUN_TO_DB:
      state.previousRuns.unshift(actions.data);
      state.totalKms = state.totalKms + parseInt(actions.data.distance);
      break;
    case GET_USER_DATA:
      // Data manipulations
      const data = actions.data;
      let runs = [];
      let totalKm = 0;
      for (const item in data) {
        runs.unshift({
          id: item,
          cal: data[item].cal,
          day: data[item].day,
          distance: data[item].distance,
          time: data[item].time,
          timeOfDay: data[item].timeOfDay,
        });
        totalKm = totalKm + parseInt(data[item].distance);
      }
      state.previousRuns = runs;
      state.totalKms = totalKm;
      state.userName = actions.userName;
      break;
  }
  return state;
};

export default reducer;
