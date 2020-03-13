
/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
  let start_index;
  if (s.length % 2 === 0) {
    start_index = s.length / 2 - 1;
  }
  else {
    start_index = s.length / 2;
  }
  return s.substring(start_index, s.length / 2 + 1);
}