// Add redux thunk

// 1. Save a current run
// 2. Fetch all previous runs
// 3. Save a run to DB

export const SAVE_CURRENT_RUN = 'SAVE_CURRENT_RUN';
export const SAVE_RUN_TO_DB = 'SAVE_RUN_TO_DB';
export const GET_USER_DATA = 'GET_USER_DATA';

export const save_current_run = data => {
  return {type: SAVE_CURRENT_RUN, data};
};

// Saving the current to db and updating previousRun array in redux store
export const save_run_to_db = data => {
  // Code coming for saving runs to db(Firebase)
  return dispatch => {
    const rawBody = JSON.stringify({
      day: data.day,
      timeOfDay: data.timeOfDay,
      distance: data.distance,
      time: data.time,
      cal: data.cal,
    });

    fetch(
      'https://nike-run-club-yt-default-rtdb.firebaseio.com/Users/Nakul.json',
      {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: rawBody,
      },
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.error(error));

    dispatch({type: SAVE_RUN_TO_DB, data});
  };
};

// Getting user information from DB

export const get_user_data = () => {};
