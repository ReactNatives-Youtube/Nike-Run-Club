const secondsToHm = seconds => {
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
const calculatePace = (dist, time_seconds) => {
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

const pacePresentation = pace => {
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

console.log(pacePresentation(calculatePace(2, 3000)));
