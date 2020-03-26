/*
This kata is designed to test your ability to extend the functionality of built-in classes.
 In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
*/

Array.prototype.square = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    arr[i] = this[i] * this[i];
  }
  return arr;
}
Array.prototype.cube = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    arr[i] = this[i] * this[i] * this[i];
  }
  return arr;
}
Array.prototype.sum = function () {
  let sum = 0;
  for (i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}
Array.prototype.average = function () {
  let sum = 0;
  for (i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
}
Array.prototype.even = function () {
  let arr = [], j = 0;
  for (i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) {
      arr[j++] = this[i];
    }

  }
  return arr;
}
Array.prototype.odd = function () {
  let arr = [], j = 0;
  for (i = 0; i < this.length; i++) {
    if (this[i] % 2 != 0) {
      arr[j++] = this[i];
    }

  }
  return arr;
}