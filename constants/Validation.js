// Helper function for validation of metric values
export const validateInput = (input, typeOfMetric) => {
  var rgx;
  // The distance should have any number of digits from 0 to 9. One or zero decimal point. One or zero number (digit) after the decimal point.
  if (typeOfMetric == 'Distance') {
    rgx = /^[0-9]{0,2}\.{1}[0-9]{0,2}?$/;
  } else {
    // The time - hours and minutes. The hours and minutes can be >=0 and <=99
    rgx = /^[0-9]{0,2}\:{1}[0-9]{0,2}?$/;
  }
  return input.match(rgx); // true or false
};
