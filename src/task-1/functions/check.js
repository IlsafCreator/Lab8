function check(data, expectedType) {
  if (((typeof (data) === expectedType) && !(data === null && expectedType === 'object')) || (data === null && expectedType === 'null')) {
    return true;
  }
  return false;
}

module.exports = check;