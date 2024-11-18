function isPalindrome(word) {
  // Write your algorithm here
  // Reverse the string
  const reversedWord = word.split("").reverse().join("");
  // Compare the reversed string with the original string
  return reversedWord === word;
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    reversedStr = reverse(word)
    if reversedStr == str:
      return true
    else: 
       return false
*/

/*
  Add written explanation of your solution here
  1.Reverse the word: I used js's string and array methods to reverse the input string. split('') converts the string
  into an array of characters, reverse() reverses the array , and join("") joins the array back to a string.
  2. Compare the reversed string with the original: I then compared the string with the original string. If they are the same, 
  the word is a palindrome and we return true ;otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Hello"));
  
  
  
  
}

module.exports = isPalindrome;
