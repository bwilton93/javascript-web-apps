// In a new file add.js, define and export a function add, which returns the sum of two numbers.
// In a new file multiply.js, define and export a function multiply, which returns the product of two numbers.
// In the main file, require and use the two previous functions to calculate (2 + 2) * 4 and print the result to the console (16).
// Make sure to run npm run build to regenerate the bundle file (if that command wasn't already running in a terminal). Also make sure the bundle file is loaded by the HTML page index.html.
// Open the page and verify the result is printed in the console.
// Change the numbers in the operation in index.js — the file bundle.js should be automatically regenerated and, after refreshing the page, you should see a new result in the console.

const add = (a, b) => {
  return a + b;
}

module.exports = add;
