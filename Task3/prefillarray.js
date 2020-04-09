/*Create the function prefill that returns an array of n elements that all have the same value v.
 See if you can do this without using a loop.
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/

function prefill(array_size, value) {
  if (! /^\d+$/.test(array_size + "")) {
    throw new TypeError(`${array_size} is invalid`);
  }
  else {
    return array_size > 0 ? Array(array_size).fill(value) : [];
  }
}