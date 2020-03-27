/*
We want to create a function, which returns an array of functions, which return their index in the array.
 For better understanding, here an example:callbacks[0](); // must return 0

*/

function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}