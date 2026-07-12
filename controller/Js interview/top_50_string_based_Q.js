/*
=================> REGEX BASIC <================
Q.1 How to get only string from mixedString like => User_Name_2026
Q.2 How to get only numbers from a string 

=================> TOP 50 STRING BASED Q <================

=================> Basic Manipulation & Reversals <================
Q.1 Reverse a String: Reverse characters using both built-in methods (split('').reverse().join('')) and a manual loop.#
Q.2 Reverse Words in a Sentence: Reverse individual words while maintaining their original sentence order.
Q.3 Preserve Space Reversal: Reverse a string while keeping the spacing positions exactly where they were.
Q.4 Toggle Case: Convert uppercase characters to lowercase and vice versa in a single string.
Q.5 Capitalize First Letter: Convert the first character of every word in a sentence to uppercase.
Q.6 Truncate String: Cut a string if it exceeds a specified length N and append '...'
Q.7 Remove Spaces: Strip all whitespaces (spaces, tabs) out of a given string.
Q.8 Find Most Frequent Character: Identify the single character that appears the highest number of times.
Q.9 First Non-Repeating Character: Scan a string to return the first character that does not repeat anywhere.
Q.10 Find All Substrings: Generate every possible continuous substring from a given string.
Q.11 Longest Substring Without Repeating Characters: Use a sliding window approach to find the maximum length of a unique substring.
Q.12 Count Vowels and Consonants: Compute the total number of vowels versus consonants in an alphanumeric string.
Q.13 Palindrome Check: Determine if a string reads the same forwards and backwards, ignoring spaces and punctuation.

*/

// =================> REGEX BASIC <================
// Q.1 How to get only string from mixedString like => User_Name_2026
/*
const mixedString = "User_Name_2026!";

// Leaves only lowercase and uppercase a-z letters
const lettersOnly = mixedString.replace(/[^a-zA-Z]/g, ""); 

console.log(lettersOnly); 
*/

// Q.2 How to get only numbers from a string
/*
const string = "abc123xyz456";
const numbers = string.replace(/\D/g, ""); 
console.log(numbers)

*/





// =================> Basic Manipulation & Reversals <================

// Q.1 Reverse a String: Reverse characters using both built-in methods (split('').reverse().join('')) and a manual loop.
/*
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

*/

// Q.2 Reverse Words in a Sentence: Reverse individual words while maintaining their original sentence order.
/*
function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords("JavaScript is awesome"));

*/

// Q.3 Preserve Space Reversal: Reverse a string while keeping the spacing positions exactly where they were.
/*
function preserveSpaceReverse(str) {
  let arr = str.split('');

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {

    if (arr[left] === ' ') {
      left++;
      continue;
    }

    if (arr[right] === ' ') {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join('');
};

console.log(preserveSpaceReverse("a bc d")); 

*/

// Q.4 Toggle Case: Convert uppercase characters to lowercase and vice versa in a single string.
/*
function toggleCase(str) {
  return str
    .split('')
    .map(char => {
      if (char >= 'A' && char <= 'Z') {
        return char.toLowerCase();
      }

      if (char >= 'a' && char <= 'z') {
        return char.toUpperCase();
      }

      return char;
    })
    .join('');
}

console.log(toggleCase("Hello World 123!"));

*/

// Q.5 Capitalize First Letter: Convert the first character of every word in a sentence to uppercase.
/*
function capitalizeFirstLetter(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeFirstLetter("hello   world"));

*/

// Q.6 Truncate String: Cut a string if it exceeds a specified length N and append '...'
/*
function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + '...';
}

console.log(truncateString("JavaScript is awesome", 10));

*/

// Q.7 Remove Spaces: Strip all whitespaces (spaces, tabs) out of a given string.
/*
function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

console.log(removeSpaces(" Java\tScript \n is  awesome "));
*/

// Q.8 Find Most Frequent Character: Identify the single character that appears the highest number of times.
/*
function mostFrequentCharacter(str) {
  const frequency = {};
  let maxChar = '';
  let maxCount = 0;

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;

    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return {maxChar, maxCount};
}

console.log(mostFrequentCharacter("javascript"));

*/

// Q.9 First Non-Repeating Character: Scan a string to return the first character that does not repeat anywhere.
/*
function firstNonRepeatingCharacter(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingCharacter("swiss"));

*/

// Q.10 Find All Substrings: Generate every possible continuous substring from a given string.
/*
function findAllSubstrings(str) {
  const result = [];

  for (let start = 0; start < str.length; start++) {
    let current = '';

    for (let end = start; end < str.length; end++) {
      current += str[end];
      result.push(current);
    }
  }

  return result;
}

console.log(findAllSubstrings("aaa"));

*/

// Q.11 Longest Substring Without Repeating Characters: Use a sliding window approach to find the maximum length of a unique substring.
/*
function longestUniqueSubstring(str) {
  const seen = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {

    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  console.log(seen);
  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));

*/

// Q.12 Count Vowels and Consonants: Compute the total number of vowels versus consonants in an alphanumeric string
/*
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  const vowelChars = 'aeiou';

  for (const char of str.toLowerCase()) {

    if (vowelChars.includes(char)) {
      vowels++;
    } else if (char >= 'a' && char <= 'z') {
      consonants++;
    }

  }

  return {
    vowels,
    consonants
  };
}

console.log(countVowelsAndConsonants("JavaScript123!"));
// { vowels: 3, consonants: 7 }

*/

// Q.13 Palindrome Check: Determine if a string reads the same forwards and backwards, ignoring spaces and punctuation.
/*
function isPalindrome(str) {
  // 1. Remove non-alphanumeric characters and lowercase the string
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const reversed = cleaned.split('').reverse().join('');
  
  return cleaned === reversed;
}

console.log(isPalindrome("RaceCar"));             // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello"));               // false

*/

