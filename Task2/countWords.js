/*Can you realize a function that returns word count from a given string?
You have to ensure that spaces in string is a whitespace for real. 


*/



function countWords(str) {
  if(str.length===0)
    return 0;
  return str.trim().split(/\s+/).length;
}