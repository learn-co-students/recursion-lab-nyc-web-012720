function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(str) {
    let firstCharacter = function(str) {
        return str.slice(0, 1);
    };
    
    let lastCharacter = function(str) {
        return str.slice(-1);
    };
    
    let middleCharacters = function(str) {
        return str.slice(1, -1);
    };

    if (str.length < 2) {
        return true;
    }

    if (firstCharacter(str) == lastCharacter(str)) {
        return isPalindrome(middleCharacters(str));
    }

    return false;
};

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}
  
function maxOf(myArray) {
if (myArray.length === 1) {
    return myArray[0];
} else {
    return Math.max(myArray.pop(), maxOf(myArray));
}
}

function includesNumber(myArray, myNumber) {
if (!myArray.length) {
    return false;
} else if (myArray[0] === myNumber) {
    return true;
} else {
    return includesNumber(myArray.slice(1), myNumber);
}
}