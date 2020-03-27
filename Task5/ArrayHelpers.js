/*
 Question Link - http://www.codewars.com/kata/array-helpers
*/

Array.prototype.square = function () {
  return this.map(value => value * value);
}
Array.prototype.cube = function () {
  return this.map(value => value * value * value);
}
Array.prototype.sum = function () {
  if (!this.length)
    return NaN;
  return this.reduce((sum, currentValue) => sum + currentValue);
}
Array.prototype.average = function () {
  if (!this.length)
    return NaN;
  let sum = this.reduce((sum, currentValue) => sum + currentValue);
  return sum / this.length;
}
Array.prototype.even = function () {
  return this.filter(x => !(x % 2));
}
Array.prototype.odd = function () {
  return this.filter(x => x % 2);
}