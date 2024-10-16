/*
===================> BASIC LABEL QUESTION <==================
Q.1 Remove duplicate from array (Inbuild) => DONE
Q.2 Remove duplicate from array of object (Inbuild) => DONE
Q.3 Array shorting (Inbuild) => DONE
Q.4 Array of object shorting (Inbuild) => DONE
Q.5 Find the Missing Number to the given Array (Inbuild) => DONE
Q.6 Find duplicate element to the given Array (Inbuild) => DONE
Q.7 Find smallest number in the given Array (Custom) => DONE
Q.8 Remove null and undefined of the given object (Custom) => DONE
Q.9 Find index of Captial letter to given Array (Custom) => DONE
Q.10 Write a program for Palindrome (Custom) => DONE
Q.12 Captilized first letter of word (Custom) => DONE
Q.13 Display TRUE if array containing duplicate if not duplicate display FALSE (Custom) => DONE
Q.14 if i have five words how do i convert first second and four word as captial letter (Custom) => DONE
Q.15 Display this desired output { abc: 3, ccr: 2, jtv: 1 }
    from this given Array ['abc','bac','bac','ccr','rcc','vtj'] (Custom) => DONE

Q.16 Rotate Array by 2 place (Inbuild) => DONE
Q.17 Find Common key value in to this two object
    const input1 = {a:15, b:5, c:8, d:10, e:15}
    const input2 = {a:5, e:15, f:10, d:10}; (Custom) => DONE

Q.18 Reverse string word wise (Inbuild) => DONE
Q.19 Find max occuring character in the given String (Custom) => DONE
Q.20 Display letter in alphabetical order of the given string (Custom) => DONE
Q.21 Find common value between two array => DONE
Q.22 Display only non repeaing value of the given Array => DONE
Q.23 How to reverse number (Inbuild) => DONE
Q.24 How to reverse number (Custom) => DONE
Q.25 Replace a specific letter from the different symbol of the given string => DONE
Q.26 Find the factor of the given number => DONE
Q.27 Write a program to check Even and Odd number => DONE
Q.28 Write a program to check Prime number => DONE
Q.29 Write a program to print fibonacci series => DONE
Q.30 Write a program to print Captial A-Z using loop => DONE
Q.31 Write a program to print Small a-z using loop => DONE
Q.32 Find first missing Odd number of the given Array => DONE
Q.33 Swaip number without third variable => DONE
Q.34 Randomise the array element Or suffle the array => DONE
Q.35 Write a program of FizzBuzz => DONE
Q.36 How do you check if a string contains only digits => DONE
Q.37 How do you find the longest word in a string => DONE
Q.38 How do you check if two strings are anagrams => DONE
Q.39 How do you count the number of vowels in a string => DONE
Q.40 How do you count Vowels and Consonants in a given string => DONE
Q.41 Find First Non Repeating Character => DONE
Q.42 Find Second Non Repeating Character => DONE
Q.43 How to make object immutable => DONE
Q.44 Find the Longest Key in an Object => DONE
Q.45 Given an array of objects, group them by a specific property => DONE
Q.46 Write a function that merges two objects. If both objects have the same key, 
the value from the second object should overwrite the value from the first => DONE
Q.47 Given an array of objects, write a function that counts how many times each unique property value occurs => DONE
Q.48 Write a function that merges two objects. If both objects have the same key, 
the value from the second object should overwrite the value from the first (Plain Object) => DONE
Q.49 Write a function that merges two objects. If both objects have the same key, 
the value from the second object should overwrite the value from the first (Nested Object)
Q.50 find the position of first and final occurrence of an element in an array element is 5 => DONE
Q.51 Remove all the zero at the end => DONE





===================> ADVANCE LABEL QUESTION <==================
Q.1 Write a program to find Second Largest number => DONE
Q.2 Write a program to find Third Largest number => DONE
Q.3 Write a program for Deep Copy of object => DONE
Q.4 Write a program of Two Sum => DONE
Q.5 Write a program to print * in Trangle Shape => DONE
EX:-
    *
   ***
  *****
 *******
*********

Q.6 Write a program to print Number in Trangle Shape => DONE
EX:-
    1
   212
  32123
 4321234
543212345   

Q.7 Write a function that flattens a deeply nested object, so all keys are brought to the top level, separated by dots => DONE
Q.8 Write a function that returns the deepest key-value pair in a nested object => DONE
Q.9 Write a function that converts a JavaScript object into a query string that can be used in a URL 
(Without Nested Object) => DONE
Q.10 Write a function to compare two objects for equality. Make sure to account for nested objects
Q.11 Write a program for setZero Matrix => DONE
  4   1   3           4   1   0
  2  -4   0 ------>   0   0   0
  5   9   2           5   9   0

Q.12 Given an array of intervals where intervals[i] = [starti, endi), merge all overlapping intervals and return an 
array of the non-overlapping intervals that cover all the intervals in the input => DONE
Q.13 Given a string s, find the length of the longest substring without repeating characters.
Q.14 Print a Right-Angled Triangle Pattern => DONE
  1
  12
  123
  1234
  12345

Q.15 Print an Inverted Right-Angled Triangle Pattern => DONE
  54321
  5432
  543
  54
  5

Q.16 Print a Pyramid Number Pattern => DONE
    1
   121
  12321
 1234321
123454321

Q.17 Print a Number Diamond Pattern
    1
   121
  12321
 1234321
123454321
 1234321
  12321
   121
    1



* */







// ===================> BASIC LABEL QUESTION <==================

// Q.1 Remove duplicate from array (Inbuild)
/*
var arr = [10,10,16,2,1,7,16];
var uniqueArray = arr.filter((item, index) => arr.indexOf(item) == index);
console.log(uniqueArray);
*/

// Q.2 Remove duplicate from array of object (Inbuild)
/*
var arr = [
    {name: "Jhon", email: "jhon@gmail.com", contactNum: "9999999999"},
    {name: "Foo", email: "foo@gmail.com", contactNum: "9999999991"},
    {name: "Greet", email: "greet@gmail.com", contactNum: "9999999992"},
    {name: "Jhon", email: "jhon@gmail.com", contactNum: "9999999999"},
];
var uniqueArray = arr.filter((item, index, self) => self.findIndex(value => value.name == item.name && value.email == item.email) == index);
console.log(uniqueArray);
*/

// Q.3 Array shorting (Inbuild)
/*
var arr = [5,9,2,7,62];
arr.sort((a,b) => a - b);
console.log(arr)
*/

// Q.4 Array of object shorting (Inbuild)
/*
var arr = [
    {name: "Jhon", age: 25},
    {name: "Greet", age: 20},
    {name: "Foo", age: 26},
];
arr.sort((a,b) => a.name.localeCompare(b.name));
console.log(arr)
*/

// Q.5 Find the Missing Number to the given Array (Inbuild)
/*
var findMissingNum = () => {
    var arr = [1,5,6,8,10];
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    var missingNum = [];

    for(let i = min; i < max; i++){
        if(!arr.includes(i)){
            missingNum.push(i)
        }
    }
    console.log(missingNum)
}
findMissingNum();
*/

// Q.6 Find duplicate element to the given Array (Inbuild)
/*
var arr = [10,10,16,2,1,7,16];
var duplicates = arr.filter((item, index) => arr.indexOf(item) != index);
console.log(duplicates)
*/

// Q.7 Find smallest number in the given Array
/*
var findSmallestNum = () => {
    var arr = [5,3,6,9,2,15,0];
    var smallest = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i];
        }
    }
    console.log(smallest)
}
findSmallestNum()
*/

// Q.8 Remove null and undefined of the given object
/*
const obj = {
    a: 1,
    b: null,
    c: undefined,
    d: 2
};

for(let key in obj){
    if(obj[key] == undefined || obj[key] == null)
        delete obj[key];
};
console.log(obj)
*/

// Q.9 Find index of Captial letter to given Array
/*
var arr = ['a', 'M', 'X', 'j', 'Y'];

var capLetterIndex = []
for(let i = 0; i <arr.length; i++){
    let letter = arr[i].toUpperCase();
    if(letter == arr[i])
    capLetterIndex.push(i);
}
console.log(capLetterIndex);
*/

// Q.10 Write a program for Palindrome (Custom)
/*
let str = "No x in Nixonx";
var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

var reversedStr = cleanedStr.split("").reverse().join("");
if(reversedStr == cleanedStr){
    console.log(`${str} is a palindrome`);
}else{
    console.log(`${str} is not a palindrome`);
}

// Q.12 Captilized first letter of word
var array = ["apple", "banana", "cherry"];

for(let i = 0; i<array.length; i++){
  array[i] =  array[i].split("")[0].toUpperCase() + array[i].slice(1);
}
console.log(array);
*/

// Q.13 Display TRUE if array containing duplicate if not duplicate display FALSE
/*
var checDuplicate = () => {
    let arr = [1, 2, 3, 4, 5, 2];
    var identifier = {};

    for(let i = 0; i<arr.length; i++)
    if(identifier[arr[i]]) return "Duplicate Found"; else identifier[arr[i]] = true;

    return "Duplicate Not Found";
};

let duplicateStatus = checDuplicate();
console.log(duplicateStatus);
*/

// Q.14 if i have five words how do i convert first second and four word as captial letter
/*
let str2 = "apple mango are good";
var arr = str2.split(" ");

for(let i = 0; i < arr.length; i++){
    if(i == 0 || i == 1 || i == 3){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
};
console.log(arr.join(" "));
*/

// Q.15 Display this desired output { abc: 3, ccr: 2, jtv: 1 }
// from this given Array ['abc','bac','bac','ccr','rcc','vtj']
/*
const displayDesireOutput = () => {
    var arr = ['abc','bac','bac','ccr','rcc','vtj'];
    var obj = {};

    arr.forEach(item => {
      let value = item.split("").sort((a, b) => a.localeCompare(b)).join("");
      if(!obj[value]){
        obj[value] = 1;
      }else{
        obj[value] = obj[value] + 1;
      }
    })

    return obj;
}
const result = displayDesireOutput();
console.log(result);
*/

// Q.16 Rotate Array by 2 place
/*
function rotateArrayLeft(arr, k) {
    k = k % arr.length
    const rotatedPart = arr.slice(k);
    const remainingPart = arr.slice(0, k);

    return rotatedPart.concat(remainingPart);
  }

  const arr = [1, 2, 3, 4, 5, 6, 7];
  const rotatedArray = rotateArrayLeft(arr, 2);
  console.log(rotatedArray);
*/

// Q.17 Find Common key value in to this two object
/*
function findCommanKeyVal(){
    const input1 = {a:15, b:5, c:8, d:10, e:15}
    const input2 = {a:5, e:15, f:10, d:10};
    var obj = {};

    for(let key in input1){
        if(input1[key] == input2[key]){
        obj[key] = input1[key]
        }
    }
    console.log(obj);
}

findCommanKeyVal();
*/

// Q.18 Reverse string word wise
/*
var str = 'This is Javascript Code';
str = str.split(" ").reverse().join(" ");
console.log(str)
*/

// Q.19 Find max occuring character in the given String
/*
var str = 'This is Javascript Code and you to find max char';
var newStr = str.replace(/[^a-z]/g, '').split("");

var obj = {};

newStr.forEach(item => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
});

var max = 0;
var keyName = '';

for(let key in obj){
    if(obj[key] > max){
        max = obj[key];
        keyName = key;
    }
}

console.log(`Max occuring character is ${keyName} with count of ${max}`)
*/

// Q.20 Display letter in alphabetical order of the given string
/*
var str = "apple";
str = str.split("").sort().join("");
console.log(str);
*/

// Q.21 Find common value between two array
/*
function findCommonValue(arr1, arr2){
    var commonValue = [];

    arr1.forEach(element => {
        if(arr2.includes(element)){
            commonValue.push(element);
        }
    });
    console.log(commonValue);
}

const arr1 = [1,2,3,4,5,6,7];
const arr2 = [3,6,15,89];
findCommonValue(arr1, arr2);
*/

// Q.22 Display only non repeating value of the given Array
/*
function nonRepeat(){
    var arr = [1,2,3,5,6,2,6,8,9,8];
    var obj = {};

    arr.forEach(item => {
        if(!obj[item]){
            obj[item] = 1;
        }else{
            obj[item] = obj[item] + 1;
        }
    });

    const nonRepeatVal = arr.filter(item => obj[item] == 1);
    console.log(nonRepeatVal)

};
nonRepeat()
*/

// Q.23 How to reverse number (Inbuild)
/*
var num = 12345;
num = Number(num.toString().split("").reverse().join(""));
console.log(num)
*/

// Q.24 How to reverse number (Custom)
/*
var num = 12345;
num = num.toString().split("");
var reversed = [];

for(let i = num.length -1; i > 0; i--){
    reversed.push(num[i]);
}
console.log(parseFloat(reversed.join('')));
*/

// Q.25 Replace a specific letter from the different symbol of the given string
/*
var str = 'sdihdudieoeha';
str = str.split('')
for(let i = 0; i < str.length; i++){
  if(str[i] == 'i'){
    str[i] = '#'
  }
  if(str[i] == 'h'){
    str[i] = '*'
  }
}
console.log(str.join(''));
*/

// Q.26 Find the factor of the given number
/*
function findFactor(){
    const num = 15;
    for(let i = 1; i<= num; i++){
        if(num % i == 0)
        console.log(i);
    }
}
findFactor()
*/

// Q.27 Write a program to check Even and Odd number
/*
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
var result = isEvenOrOdd(6);
console.log(result)
*/

// Q.28 Write a program to check Prime number
/*
function isPrime(value){
    if(value <= 1)
        return false;

    for(let i = 2; i < value; i++){
        if(value % i == 0)
            return false;
    }
    return true;
};

var result = isPrime();
console.log(result)
*/

// Q.29 Write a program to print fibonacci series
/*
function printFibonacciSeries(n){
    var fibArray = [0, 1];

    for(let i = 2; i < n; i++){
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
};
const n = 10;
const fibSeries = printFibonacciSeries(n);
console.log(fibSeries.join(", "));
*/

// Q.30 Write a program to print Captial A-Z using loop
/*
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCodePoint(i));
}
*/

// Q.31 Write a program to print Small a-z using loop
/*
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCodePoint(i));
}
*/

// Q.32 Find first missing Odd number of the given Array
/*
function firstMissingOdd(){
    let arr = [5, 7, 9, 11, 15, 17, 20];
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    for(let i = min; i < max; i++){
        if(i % 2 != 0)
            if(!arr.includes(i))
                return i;
    }

}

var missingOdd = firstMissingOdd();
console.log(missingOdd)
*/

// Q.33 Swaip number without third variable
/*
function swaipNum(){
    let a = 5;
    let b = 10;

    console.log(`Before swapping: a = ${a} b = ${b}`);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(`After swapping: a = ${a} b = ${b}`);
}

swaipNum()
*/

// Q.34 Randomise the array element Or suffle the array
/*
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    };
    return arr;
};

const arr = [5, 9, 2, 7, 3, 1];
const result = shuffleArray(arr);
console.log(result);
*/

// Q.35 Write a program of FizzBuzz
/*
function fizzBuzz(num){
    for(let i = 0; i < num; i++){
        if(i % 5 == 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log('Fizz');
        }else if(i % 5 == 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}

const num = 15
fizzBuzz(num)
*/

// Q.36 How do you check if a string contains only digits
/*
function isNumeric(str){
    return /^\d+$/.test(str);
};

const str = '156184';
const result = isNumeric(str);
console.log(result)
*/

// Q.37 How do you find the longest word in a string
/*
function findLongestWord(str){
    const words = str.split(' ');
    var longestWord = '';

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"))
*/

// Q.38 How do you check if two strings are anagrams
/*
function isAnagaram(str1, str2){
    const sortedStr1 =  str1.split('').sort().join('');
    const sortedStr2 =  str2.split('').sort().join('');
   
    return sortedStr1 === sortedStr2;
   };
   
   console.log(isAnagaram("listen", "silent"));
*/

// Q.39 How do you count the number of vowels in a string
/*
function countVowels(str){
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log(countVowels("haello world"))
*/

// Q.40 How do you count Vowels and Consonants in a given string
/*
function countVowelsAndConsonants(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    str = str.split('');
    var vowelCount = 0;
    var consonantCount = 0;

    for(let char of str){
        if(char > 'a' && char <'z'){
            if(vowels.includes(char)){
                vowelCount++;
            }else{
                consonantCount++;
            }
        }
    };
    return {vowelCount, consonantCount};
};

const input = "Hello World!";
const result = countVowelsAndConsonants(input);
console.log(`Vowels: ${result.vowelCount}, Consonants: ${result.consonantCount}`);
*/

// Q.41 Find First Non Repeating Character
/*
function firstNonRepeatingChar(str){
    const charCount = {};

    for(let i = 0; i < str.length; i++){
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    };

    for(let key in charCount){
        if(charCount[key] == 1)
            return key;
    }

    return null;
}

const str = 'swss';
const result = firstNonRepeatingChar(str);
console.log(result)
*/

// Q.42 Find Second Non Repeating Character
/*
function findSecondNonRepeatChar(str){

    const charCount = {};

    for(let i = 0; i < str.length; i++){
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    };

    const nonRepeatingChars = [];
    for(let key in charCount){
        if(charCount[key] == 1){
            nonRepeatingChars.push(key);
        }
    };

    return nonRepeatingChars.length >= 2 ? nonRepeatingChars[1] : null;
};

const str = 'swriss';

const result = findSecondNonRepeatChar(str);
console.log(result);
*/

// Q.43 How to make object immutable 
/*
1. How to make imutable object on only one key 
const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012",
    details: {email: "test@gmail.com"}
  };

  Object.defineProperty(person, 'aadharNumber', {writable: false});
  // For Nested Object   
  Object.defineProperty(person.details, 'email', {writable: false}); 


console.log(person)
person.aadharNumber = '7888-5846-9852';
console.log(person)

2. I want hide a key in the given object 
const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012"
  };

  Object.defineProperty(person, 'aadharNumber', {enumerable: false});

console.log(person)

3. Using Object.freeze() to Prevent Adding Updating and Deleting Properties
const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012"
};

Object.freeze(person);
person.aadharNumber = '9964-6254-8965'
console.log(person)

4. Using Object.seal() to Prevent Adding or Deleting Properties (But Allow Updates)
const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012"
};

Object.seal(person)
console.log(person)

5.Using Object.preventExtensions() to Prevent Adding Properties (But Allow Updates and Delete)
const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012"
};

Object.preventExtensions(person);
console.log(person)

*/

// Q.44 Find the Longest Key in an Object
/*
function longestKey(obj){
    var largestKey = '';
    for(let key in obj){
      if(key.length > largestKey.length){
        largestKey = key;
      }
    };
    
    return largestKey;
  }
  
  const obj = { short: 1, longerKey: 2, longestKeyEver: 3 };
  const largestKeyName = longestKey(obj);
  console.log(largestKeyName)
*/

// Q.45 Given an array of objects, group them by a specific property
/*
function groupByProperty(arr, property) {
    const grouped = {};
  
    arr.forEach((item) => {
      const key = item[property];
  
      // If the key doesn't exist in the grouped object, create an empty array for it
      if (!grouped[key]) {
        grouped[key] = [];
      }
  
      // Add the current item to the appropriate group
      grouped[key].push(item);
    });
  
    return grouped;
  }
  
  const data = [
    { name: 'John', group: 'A' },
    { name: 'Jane', group: 'B' },
    { name: 'Jake', group: 'A' }
  ];
  
  const result = groupByProperty(data, 'group');
  console.log(result)
  */

// Q.46 Write a function that merges two objects. If both objects have the same key, 
// the value from the second object should overwrite the value from the first
/*
function mergeObjects(obj1, obj2){
const merged = { ...obj1 };

for(let key in obj2){
    if(obj2.hasOwnProperty(key)){
    merged[key] = obj2[key]
    }
}

return merged;
}


const obj1 = { name: "John", age: 25, city: "New York" };
const obj2 = { age: 30, city: "London", profession: "Engineer" };

const merged = mergeObjects(obj1, obj2);
console.log(merged);
*/

// Q.47 Given an array of objects, write a function that counts how many times each unique property value occurs
/*
  function countPropertyValues(arr, property) {
    const counts = {};
  
    arr.forEach(item => {
      const value = item[property];
      counts[value] = (counts[value] || 0) + 1;
    });
  
    return counts;
  }
  
  const people = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "London" },
    { name: "Mike", age: 25, city: "New York" },
    { name: "Sara", age: 30, city: "Paris" },
    { name: "Tom", age: 25, city: "London" }
  ];
  
  // Count how many times each 'age' occurs
  const ageCounts = countPropertyValues(people, 'age');
  console.log(ageCounts);
*/

// Q.48 Write a function that merges two objects. If both objects have the same key, 
// the value from the second object should overwrite the value from the first (Plain Object)
/*
function mergeObjects(obj1, obj2) {
    const merged = { ...obj1, ...obj2 };
    return merged;
  }
  
  const obj1 = {
    name: "John",
    age: 25,
    city: "New York"
  };
  
  const obj2 = {
    age: 30,  // This will overwrite the age from obj1
    country: "USA"
  };
  
  const mergedObject = mergeObjects(obj1, obj2);
  console.log(mergedObject);
*/


// Q.49 Write a function that merges two objects. If both objects have the same key, 
// the value from the second object should overwrite the value from the first (Nested Object)
/*
function deepMergeObjects(obj1, obj2) {
    const merged = { ...obj1 };
  
    for (let key in obj2) {
  
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
          merged[key] = deepMergeObjects(merged[key] || {}, obj2[key]);
        } else {
          merged[key] = obj2[key];
        }
      }
    }
  
    return merged;
  }
  
  const obj1 = {
    name: "John",
    age: 25,
    address2: {
      city: "New York",
      postalCode: "10001"
    }
  };
  
  const obj2 = {
    address: {
      postalCode: "10002",
      country: "USA"
    },
    age: 30,
  };
  
  const mergedObject = deepMergeObjects(obj1, obj2);
  console.log(mergedObject);
*/

// Q.50 find the position of first and final occurrence of an element in an array element is 5
/*
let arr = [1, 5, 3, 4, 6, 5, 7, 5, 8, 5];
let element = 5;

let firstOccurrence = -1;
let lastOccurrence = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        if (firstOccurrence === -1) {
            firstOccurrence = i;  // Set first occurrence
        }
        lastOccurrence = i;  // Continuously update for last occurrence
    }
}

console.log("First occurrence of 5 is at index:", firstOccurrence);
console.log("Last occurrence of 5 is at index:", lastOccurrence);
*/

// Q.51 Remove all the zero at the end
/*
let arr = [0, 5, 0, 0, 3, 1, 15, 0, 12, 0, 0, 0];

while (arr[arr.length - 1] === 0) {
    arr.pop();  // Remove the last element if it's zero
}

console.log(arr);
*/








// ===================> ADVANCE LABEL QUESTION <==================

// Q.1 Write a program to find Second Largest number
/*
function findSeconfLargest(arr){
    if(arr.length < 2)
        return "Array must have two numbers";

    var first = -Infinity;
    var second = -Infinity;

    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        }else if(num > second && num < first){
            second = num;
        }
    }
    return second === -Infinity ? "No second largest number" : second;
}

const arr = [5,3,63,0,1,4];
var result = findSeconfLargest(arr);
console.log("Second largest number is:", result);
*/

// Q.2 Write a program to find Third Largest number
/*
function thirdLargest(arr) {
    if(arr.length < 3)
    return "Array must have three numbers";

    arr = [...new Set(arr)];
    
    var first  = -Infinity;
    var second = -Infinity;
    var third  = -Infinity;

    for(let num of arr){
        if(first <= num){
            third  = second;
            second = first;
            first  = num;
        }else if(second <= num){
            third = second;
            second = num;
        }else if(third <= num){
            third = num;
        }
    }
    
    return third;
};

const arr = [15,12,10,1,2,2];
const result = thirdLargest(arr);
console.log("Third largest number is:", result);
*/

// Q.3 Write a program for Deep Copy of object
/*
function makeDeepCopy(obj){
    if(typeof obj != 'object' || obj == null)
        return obj;

    var copyValue = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        copyValue[key] = makeDeepCopy(obj[key]);
    }

    return copyValue;
}

const obj = {
    name: "Jhon",
    age: 25,
    add: {
        contact: "9999999990",
        details: { pin: "89564"}
    }
}

const copy = makeDeepCopy(obj);
obj.add.details.pin = '8888';
console.log(obj)
console.log(copy);
*/

// Q. 28 Print factorial number => DONE
// const getFactorialNum = () => {
//     const input = 5;
//     let fact = 1;
//     if(input < 0)
//     return console.log(`Factorial of ${input} is not possible`)
    
//     for(let i=1; i<=input; i++){
//         fact = i * fact;
//     }
//     console.log('fact :>> ', fact);
// }
// getFactorialNum()

// Q.4 Write a program of Two Sum
/*
function twoSum(arr, target){
    const numToIndexMap = {};

    for(let i = 0; i < arr.length; i++){
        const complement = target - arr[i];
        
        if(numToIndexMap.hasOwnProperty(complement)){
            return [numToIndexMap[complement], i];
        };

        numToIndexMap[arr[i]] = i;
    }
    return [];
};

const arr = [1,2,5,9,20];
const target = 25;

const result = twoSum(arr, target);
console.log(result);
*/


/*
function printTrangle(rows){
    for (let i = 1; i <= rows; i++) {
        let row = '';
        
        // Add spaces in each row
        for(let j = 1; j <= rows - i; j++){
            row += ' '; 
        }

        // Adding * in each row 
        for(let k = 1; k <= i * 2 - 1; k++){
            row += '*';
        }
        console.log(row)
    }
}

const k = 10;
printTrangle(k)
*/

// Q.5 Write a program to print * in Trangle Shape
/*
function printTrangle(rows){
    for (let i = 1; i <= rows; i++) {
        let row = '';
        
        // Add spaces in each row
        for(let j = 1; j <= rows - i; j++){
            row += ' '; 
        }

        // Adding * in each row 
        for(let k = 1; k <= i * 2 - 1; k++){
            row += '*';
        }
        console.log(row)
    }
}

const k = 10;
printTrangle(k)
*/

// Q.6 Write a program to print Number in Trangle Shape
/*
function printNumberTrangle(rows){
    for(let i = 1; i <= rows; i++){
        let row = '';

        // Add space in each row
        for(let j = 1; j <= rows - i; j++){
            row += ' ';
        };

        // Add descending order
        for(let k = i; k >= 1; k--){
            row += k;
        };

        // Add ascending order
        for(let l = 2; l <= i; l++){
            row += l;
        }
        console.log(row)
    };
};

const k = 8;
printNumberTrangle(k);
*/

// Q.7 Write a function that flattens a deeply nested object, so all keys are brought to the top level, separated by dots
/*
function flattenObject(obj, parentKey = '', result = {}){
  
    for(let key in obj){
      const newKey  = parentKey ? `${parentKey}.${key}` : key;
      if(typeof obj[key] === 'object' && obj[key] != null && !Array.isArray(obj[key])){
        flattenObject(obj[key], newKey, result);
      }else{
        result[newKey] = obj[key];
      }
    }
    
    return result;
  }
  
  const nestedObject = {
    name: "John",
    address: {
      street: "Main St",
      city: "New York",
      coordinates: {
        lat: 40.7128,
        long: -74.0060
      }
    },
    contact: {
      phone: "123-456-7890",
      email: "john@example.com"
    }
  };
  
  const flattened = flattenObject(nestedObject);
  console.log(flattened);
*/

// Q.8 Write a function that returns the deepest key-value pair in a nested object
/*
function findDeepestPair(obj, depth = 0, parentKey = '') {
  let deepest = { key: parentKey, value: obj, depth }; // Track the deepest key-value pair

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      // If the value is an object, recurse and find the deeper key-value pair
      if (typeof value === 'object' && value !== null) {
        const deeper = findDeepestPair(value, depth + 1, newKey);
        
        // Update the deepest key-value pair if a deeper one is found
        if (deeper.depth > deepest.depth) {
          deepest = deeper;
        }
      } else {
        // If it's not an object, update the deepest pair if this is deeper
        if (depth > deepest.depth) {
          deepest = { key: newKey, value, depth };
        }
      }
    }
  }
  return deepest;
}

const nestedObject = {
  name: "John",
  address: {
    street: "Main St",
    city: "New York",
    coordinates: {
      lat: 40.7128,
      long: -74.0060,
      detail: {
        zone: 3,
        info: {
          code: "A1B2"
        }
      }
    }
  },
  contact: {
    phone: "123-456-7890",
    email: "john@example.com"
  }
};

const deepestPair = findDeepestPair(nestedObject);
console.log(deepestPair);
*/

// Q.9 Write a function that converts a JavaScript object into a query string that can be used in a URL 
// (Without Nested Object)
/*
function convertQueryStr(obj){
    return Object.keys(obj).map(keys => `${keys}=${obj[keys]}`).join("&");
  }
  
  const params = { name: 'John', age: 30, details:{x: '555'}};
  const result = convertQueryStr(params);
  console.log(result)
*/

// Q.10 Write a function to compare two objects for equality. Make sure to account for nested objects
/*
function deepEqual(obj1, obj2) {
    // Check if both values are strictly equal (covers primitive types and reference equality)
    if (obj1 === obj2) return true;
  
    // If either of the values is not an object or is null, they are not equal
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
    }
  
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // If the objects have different numbers of keys, they are not equal
    if (keys1.length !== keys2.length) return false;
  
    // Compare the values for each key in both objects
    for (let key of keys1) {
      // If the second object doesn't have the key or the values for the key aren't equal, return false
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    // If all keys and values match, the objects are equal
    return true;
  }
  
  
  const obj1 = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      postalCode: 10001
    }
  };
  
  const obj2 = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      postalCode: 10001
    }
  };
  
  console.log(deepEqual(obj1, obj2));  // true
  
  const obj3 = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      postalCode: 10002
    }
  };
  
  console.log(deepEqual(obj1, obj3));  // false
*/  

// Q.11 Write a program for setZero Matrix
/*
const zeroMatrix = (matrix, n) => {
  let rowMarker = [false];
  let colMarker = [false];

  // First pass: find the zeroes and mark corresponding rows and columns
  for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
          if (matrix[r][c] === 0) { 
              rowMarker[r] = true;
              colMarker[c] = true;
          }
      }
  }

  // Second pass: zero out rows and columns
  for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
          if (rowMarker[r] || colMarker[c]) {
              matrix[r][c] = 0;
          }
      }
  }

  // Print the matrix
  matrix.forEach(row => console.log(row.join("  ")));
};

const matrix = [
    [4, 6, 3],
    [3, 0, 1],
    [5, 6, 2]
];

zeroMatrix(matrix, 3);
*/

// Q.12 Given an array of intervals where intervals[i] = [starti, endi), merge all overlapping intervals and return an 
// array of the non-overlapping intervals that cover all the intervals in the input 
/*
function mergeIntervals(intervals) {
  if(intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  
  for(let i = 1; i < intervals.length; i++){
      let lastMergedInterval = merged[merged.length - 1];
      let currentInterval = intervals[i];
      if(currentInterval[0] <= lastMergedInterval[1]){
          lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      }else{
          merged.push(currentInterval);
      };
  };

  return merged;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const result = mergeIntervals(intervals);
console.log(result);
*/

// Q.13 Given a string s, find the length of the longest substring without repeating characters.
/*
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let maxLength = 0;
  let start = 0;
  let charIndexMap = new Map();

  for (let end = 0; end < n; end++) {
      let char = s[end];

      // If the character is already in the map, move the start pointer
      if (charIndexMap.has(char)) {
          start = Math.max(start, charIndexMap.get(char) + 1);
      }

      // Update the character's index
      charIndexMap.set(char, end);

      // Calculate the length of the current substring
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb"));
*/

// Q.14 Print a Right-Angled Triangle Pattern
/*
function printTrangle(n){
  for(let i = 1; i<= n; i++){
      let row = '';
      for(let j = 1; j <= i; j++){
          row += j;
      }
      console.log(row);
  }
};

const n = 5;
printTrangle(n);
*/

// Q.15 Print an Inverted Right-Angled Triangle Pattern
/*
function printInvertedTrangle(n){
  for(let i = n; i >= 1; i--){
      let rows = '';
      for(let j = n; j >= n - i + 1; j--){
          rows += j;
      }
      console.log(rows);
  }
};

const n = 5;
printInvertedTrangle(n);
*/

// Q.16 Print a Pyramid Number Pattern
/*
function printParymid(n){
  for(let i = 1; i <= n; i++){
      let row = ' '.repeat(n - i);
      for(let j = 1; j <= i; j++) row += j;
      for(let j = i - 1; j >= 1; j--) row += j;
      console.log(row);
  }   
}
const n = 5;
printParymid(n);
*/

// Q.17 Print a Number Diamond Pattern
/*
function printDiamond(n) {
  for(let i = 1; i <= n; i++){
      let row = ' '.repeat(n - i);
      for(let j = 1; j <= i; j++) row += j;
      for(let j = i - 1; j >= 1; j--) row += j;

      console.log(row);
  };

  for(let i = n - 1; i >= 1; i--){
      let row = ' '.repeat(n - i);
      for(let j = 1; j <= i; j++) row += j;
      for(let j = i - 1; j >= 1; j--) row += j;

      console.log(row);
  }
}
printDiamond(5);
*/