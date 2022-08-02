// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let _key = 0;
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  //   Object.keys(chars).map(function (key) {
  //     if (chars[key] > max) {
  //       max = chars;
  //       _key = key;
  //     }
  //   });
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      _key = char;
    }
  }
  return _key;
}

module.exports = maxChar;
