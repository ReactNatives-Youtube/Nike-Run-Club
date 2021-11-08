// Manipulating JS Date function to getDayName and timeofday

export const getDayName = () => {
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[new Date().getDay()];
};

export const getTimeOfDay = () => {
  var currentHour = new Date().getHours();

  if (currentHour < 12) {
    return 'Morning';
  } else if (currentHour < 18) {
    return 'Afternoon';
  } else {
    return 'Evening';
  }
};

// Function to calculate Distance
export const calDistance = (lat1, lon1, lat2, lon2) => {
  const toRadian = angle => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);

  const RADIUS_OF_EARTH_IN_KM = 6371;
  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  return finalDistance.toFixed(2);
};

// Convert seconds to hours and minutes and seconds
export const secondsToHm = seconds => {
  seconds = Number(seconds);

  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var second = Math.floor((seconds % 3600) % 60);

  return (
    ('0' + hours).slice(-2) +
    ':' +
    ('0' + minutes).slice(-2) +
    ':' +
    ('0' + second).slice(-2)
  );
};

// function to calculate pace
export const calculatePace = (dist, time_seconds) => {
  console.log('distance' + dist);
  if (dist <= 0) {
    return 0;
  }
  dist = parseFloat(dist);
  time = secondsToHm(time_seconds);
  const hrs = parseInt(time.substring(0, 2));
  const mins = parseInt(time.substring(3, 5));
  const secs = parseInt(time.substring(6, 8));

  var timeElapsed = 0;
  timeElapsed += hrs * 60;
  timeElapsed += mins;
  timeElapsed += secs / 60;
  console.log('timeelaped ' + timeElapsed);
  const pace = timeElapsed / dist;
  console.log(pace);
  return pace;
};

// Function to show pace value to user
export const pacePresentation = pace => {
  if (pace == 0) {
    return '0\'0" ';
  }
  const paceMins = Math.floor(pace);
  console.log('Minutes' + paceMins);
  const paceSecs = (pace % 1).toFixed(1) * 60;
  console.log('Seconds' + paceSecs);
  pace = paceMins + "'" + paceSecs + '"';
  return pace;
};
