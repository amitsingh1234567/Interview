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


===================> ADVANCE LABEL QUESTION <==================
Q.1 Write a program to find Second Largest number => DONE
Q.2 Write a program to find Third Largest number => DONE
Q.3 Write a program for Deep Copy of object => DONE
Q.4 Write a program of Two Sum => DONE





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