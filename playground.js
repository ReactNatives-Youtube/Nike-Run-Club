data = {
  '-MqoIgXW-1Z1omzCQbTx': {
    cal: '0',
    day: 'Monday',
    distance: 0,
    time: 0,
    timeOfDay: 'Evening',
  },
  '-MqoJofQoL1mK2QLUI4O': {
    cal: '0',
    day: 'Monday',
    distance: '10',
    time: '100',
    timeOfDay: 'Evening',
  },
  '-MqoKEzpGR2sXA7lvtJq': {
    cal: '0',
    day: 'Monday',
    distance: 0,
    time: 60,
    timeOfDay: 'Evening',
  },
};

/**
 * id:
 * cal: '0',
    day: 'Monday',
    distance: 0,
    time: 60,
    timeOfDay: 'Evening',
 */

var runs = [];
var totalRuns = 0;
for (const item in data) {
  runs.unshift({
    id: item,
    cal: data[item].cal,
    day: data[item].day,
    distance: data[item].distance,
    time: data[item].time,
    timeOfDay: data[item].timeOfDay,
  });
  totalRuns = totalRuns + parseInt(data[item].distance);
}
console.log(runs);
console.log(totalRuns);
