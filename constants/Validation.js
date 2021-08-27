  // Helper function for validation of metric values
  export const validateInput = (input)=>{
    // The distance should have any number of digits from 0 to 9. One or zero decimal point. One or zero number (digit) after the decimal point.
    var rgx = /^[0-9]{1,}\.?[0-9]?$/;
    return input.match(rgx); // true or false
  }
