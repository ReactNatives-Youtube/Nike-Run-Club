export const SAVE_CURRENT_RUN = 'SAVE_CURRENT_RUN';
export const SAVE_RUN_TO_DB = 'SAVE_RUN_TO_DB';
export const GET_USER_DATA = 'GET_USER_DATA';

export const save_current_run = data => {
  return {type: SAVE_CURRENT_RUN, data};
};

// Saving the current to db and updating previousRun array in redux store
export const save_run_to_db = data => {
  // Code coming for saving runs to db(Firebase)
  return async (dispatch, getData) => {
    const rawBody = JSON.stringify({
      day: data.day,
      timeOfDay: data.timeOfDay,
      distance: data.distance,
      time: data.time,
      cal: data.cal,
    });

    const response = await fetch(
      'https://nike-run-club-yt-default-rtdb.firebaseio.com/Users/' +
        getData().userName +
        '.json',
      {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: rawBody,
      },
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    // Adding firebase id to current run
    data.id = responseJSON.name;
    dispatch({type: SAVE_RUN_TO_DB, data});
  };
};

// Getting user information from DB
export const get_user_data = name => {
  console.log('Getting user info');
  return async dispatch => {
    let responseJSON;
    try {
      const response = await fetch(
        'https://nike-run-club-yt-default-rtdb.firebaseio.com/Users/' +
          name +
          '.json',
        {
          method: 'GET',
          headers: {'Content-type': 'application/json'},
        },
      );
      responseJSON = await response.json();
    } catch (error) {
      responseJSON = {};
      console.error(error);
    }
    dispatch({type: GET_USER_DATA, data: responseJSON, userName: name});
  };
};
