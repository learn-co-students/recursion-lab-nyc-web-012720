// String Challenges

function printString(myString) {
   // Print out the current first character in the string.
   console.log(myString[0]);

   if (myString.length > 1) {
      // Store the remainder of the string in the 'substring' variable.
      let mySubString = myString.substring(1, myString.length);
      // Invoke printString() from within, passing in the remainder of the previous string.
      printString(mySubString);
      // exit the recursive function
      return true;
   }
}

// Write out a recursive function to reverse a string.
function reverseString(myString) {
   if (myString.length === 1) {
      return myString; 
   } else {
      return reverseString(myString.substring(1)) + myString[0];
   }
}

// Write out a recursive function to see if a word is a palindrome.
// palindrome = a word, phrase, or sequence that reads the same backward as forward

// the below function works but is not recursive
// function isPalindrome(myString) {
//    if (myString == myString.split('').reverse().join('')) {
//       return true;
//    } else {
//       return false;
//    }  
// }
function isPalindrome(myString) {
   let stringLength = myString.length; 

   // if the string is one letter or less, it is a palindrome
   if (stringLength < 2) {
      return true; 
   // if the last letter of the string deeply equals the first letter of the string
   // then repeat this process with the substrings
   } else if (myString[stringLength - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, stringLength - 1));
   } else {
      return false; 
   }
}

// Array Challenges

// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(myArray, index) {
   if (index) {
      return myArray[index] + addUpTo(myArray, --index); 
   } else {
      return myArray[index];
   }
}

// Write a recursive function to find the largest integer in an array.
function maxOf(myArray) {
   // if there is only one element in the array, the max is that element
   if (myArray.length === 1) {
      return myArray[0]; 
   // if there is more than one element in the array, find the max 
   // by running through the elements two at a time and finding the max 
   } else {
      return Math.max(myArray.pop(), maxOf(myArray)); 
   }
}

// Write out a function to see if an array includes a given element.
function includesNumber(myArray, myNumber) {
   if (myArray.length === 0) {
      return false; 
   } else if (myArray[0] === myNumber) {
      return true; 
   } else {
      return includesNumber(myArray.slice(1), myNumber); 
   }
}