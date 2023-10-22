//function for splits
function splitString(string, separator) {
  return string.split(separator);
}

//validate if value is a non-negative integer
function validateNonNegInt(q) {
  let errors = []; // Assume there's no errors at first
  if(Number(q) !== q) errors.push('Not a number!'); // Check if string is a number value
  if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
  if(parseInt(q) !== q) errors.push('Not an integer!'); // Check that it is an integer
  if (returnErrors) {
    return errors;
  } else {
    return returnErrors ? errors : (errors.length == 0);
  }
}
  /*let errors = []; // Assume there's no errors at first
  if(Number(q) !== q) errors.push('Not a number!'); // Check if string is a number value
  if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
  if(parseInt(q) !== q) errors.push('Not an integer!'); // Check that it is an integer
  return errors.length === 0; // Return true if no errors
}*/

//define attributes
let attributes = "Keissa;21;Finance and MIS";

//split the attribute into an array
let attributesArray = attributes.split(";");

//extract name, age, and major
let name = attributesArray[0];
let age = attributesArray[1];
let major = attributesArray[2];

//print attributes
console.log("Name: " + attributesArray[0]);
console.log("Age: " + attributesArray[1]);
console.log("Major: " + attributesArray[2]);

//testing function using the pieces array
let pieces = ["Keissa", "21", "Finance and MIS"];

for (let piece of pieces) {
  let errors = isNonNegInt(piece, true);
  let isValid = errors.length === 0;

  console.log()
    piece + " is a valid non-negative integer: " + (isValid ? "true" : "false") + (errors.length > 0 ? " - " + errors.join(", ") : "");

  //console.log(piece + " is a valid non-negative integer: " + isNonNegInt(piece));

}