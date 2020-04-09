//function composition

function compose(f,g) {
  
  return function (... data){
  return f(g(... data));
  }
}