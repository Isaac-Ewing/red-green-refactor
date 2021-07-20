export default function capitalizeAndFilter(array) {
  let newArr = [];
  for (let string of array) {
    string = string.toUpperCase();
    newArr.push(string);
  }
  newArr = newArr.filter(string => string[0] !== 'F');
  return newArr;
}
