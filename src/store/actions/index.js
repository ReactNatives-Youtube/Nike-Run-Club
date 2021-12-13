// Add redux thunk

// 1. Save a current run
// 2. Fetch all previous runs
// 3. Save a run to DB

export const SAVE_CURRENT_RUN = 'SAVE_CURRENT_RUN';
export const SAVE_RUN_TO_DB = 'SAVE_RUN_TO_DB';

export const save_current_run = data => {
  return {type: SAVE_CURRENT_RUN, data};
};

// Saving the current to db and updating previousRun array in redux store
export const save_run_to_db = data => {
  // Code coming for saving runs to db(Firebase or mongodb)
  return dispatch => {
    dispatch({type: SAVE_RUN_TO_DB, data});
  };
};
