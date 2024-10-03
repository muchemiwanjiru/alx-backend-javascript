export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const value of array) {
    res.push(appendString + value); // Use push() to add elements to the array
  }

  return res;
}
