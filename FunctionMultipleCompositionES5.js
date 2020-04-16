/*
problem link
  https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript
multiple function composition

*/

function compose() {
 var funcs=arguments;
 return function(data){
   for(var i=funcs.length-1;i>=0;i--){
    data=funcs[i](data);  
  }
  return data;
 }
}