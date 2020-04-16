// http://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function (string) {
  var array = string.split(".");
  let current_Obj = obj;
  for (let i = 0; i < array.length; i++) {
    if (current_Obj[array[i]]) {
      current_Obj = current_Obj[array[i]];
    } else {
      return undefined;
    }
  }
  return current_Obj;
}