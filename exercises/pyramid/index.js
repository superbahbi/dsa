// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const l = 2 * n - 1;
  const k = Math.floor(l / 2);
  for (let i = 0; i < n; i++) {
    let t = "";
    for (let j = 0; j < l; j++) {
      if (j <= k + i && j >= k - i) {
        t += "#";
      } else {
        t += " ";
      }
    }
    console.log(t);
  }
}
pyramid(10);
module.exports = pyramid;
