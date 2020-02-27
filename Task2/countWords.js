/*Can you realize a function that returns word count from a given string?
You have to ensure that spaces in string is a whitespace for real. 


*/



function countWords(str) {
  var i;
  if(!str.length || str.match(/^[^A-Za-z0-9]+$/))
    return 0;
    
  return str.trim().split(/\s+/).length;
}