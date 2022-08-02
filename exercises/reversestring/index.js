// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Split the string into an array
  // example hello = ['h','e','l','l','o']
  // reverse the array using reverse function or a custom loop
  // join the array to make a reversed string
  // return reversed string

  // easy solution
  // return str.split("").reverse().join("");
  const arrayStr = str.split("");
  let reversedStr = [];
  for (let i = arrayStr.length - 1; i >= 0; i--) {
    reversedStr.push(arrayStr[i]);
  }
  return reversedStr.join("");
}
reverse("bahbi");
module.exports = reverse;
