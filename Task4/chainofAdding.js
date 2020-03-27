function add(n){
  // Let the currying begin!
  let sum=n;
  function returnfunc(y){
  sum+=y;
  return returnfunc;
  }
  returnfunc.valueOf=function(){
  return sum;
  }
  return returnfunc;
}