function pulloutArray(array) {
  if (Array.isArray(array)) {
    var resultArray = [];
    for (let index = 0; index < array.length; index++) {
      if (Array.isArray(array[index])) {
        for (let j = 0; j < array[index].length; j++) {
          if ((array[index][j] !== null && array[index][j] !== undefined && array[index][j] !== false) && (!Number.isNaN(array[index][j])) && (typeof (array[index][j]) !== 'string') && (typeof (array[index][j]) !== 'boolean') && (typeof (array[index][j]) !== 'object')) {
            resultArray.push(array[index][j]);
          }
        }
      } else if ((array[index] !== null && array[index] !== undefined && array[index] !== false) && (!Number.isNaN(array[index])) && (typeof (array[index]) !== 'string') && (typeof (array[index]) !== 'boolean') && (typeof (array[index]) !== 'object')) {
        resultArray.push(array[index]);
      }
    }
    return (resultArray);
  } else {
    return false;
  }
}
module.exports = pulloutArray;