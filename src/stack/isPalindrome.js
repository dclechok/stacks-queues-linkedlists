/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../linked-list/stack");

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if(!cleanText) return false;
  if(cleanText.length === 1) return true;
  
  let s = new Stack();
  for(let char of cleanText){
    s.push(char);
  }
  let rev = '';
  for(let char of cleanText){
    rev += s.pop(char);
  }
  return rev === cleanText;
}

module.exports = isPalindrome;
