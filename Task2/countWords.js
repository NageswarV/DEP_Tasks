/*Can you realize a function that returns word count from a given string?
You have to ensure that spaces in string is a whitespace for real. 


*/


function countWords(str) {
  str = str.trim();
  if (!str.length) {
    return 0;
  }
  return str.split(/\s+/).length;
}