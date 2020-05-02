function isTimeRangesIntersect(timeRange1, timeRange2) {
  function isTimeCorrect(time) {
    if (time >= '00:00' && time <= '23:59') {
      return true;
    } else {
      return false;
    }
  }
  if ((Array.isArray(timeRange1) && Array.isArray(timeRange2)) && (isTimeCorrect(timeRange1[0]) && isTimeCorrect(timeRange1[1])) && (isTimeCorrect(timeRange2[0]) && isTimeCorrect(timeRange2[1]))) {
    if ((timeRange1[0] >= timeRange2[0] && timeRange1[0] <= timeRange2[1]) || (timeRange2[0] >= timeRange1[0] && timeRange2[0] <= timeRange1[1])) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = isTimeRangesIntersect;