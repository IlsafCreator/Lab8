function replaceString(text, sourceSubstring, replaceSubstring) {
  if ((typeof text === 'string') && (typeof sourceSubstring === 'string')
    && (typeof replaceSubstring === 'string')) {
    if (text.indexOf(sourceSubstring) >= 0) {
      return (text = text.slice(0, text.indexOf(sourceSubstring)) + replaceSubstring +
        text.slice(text.indexOf(sourceSubstring) + sourceSubstring.length, text.length));
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = replaceString;