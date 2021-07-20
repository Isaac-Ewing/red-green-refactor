export default function capitalizeAndFilter(array) {
  let newArr = [];
  array.map(string => {
    string = string.toUpperCase();
    newArr.push(string);
  });
  newArr = newArr.filter(string => string[0] !== 'F');
  return newArr;
}
