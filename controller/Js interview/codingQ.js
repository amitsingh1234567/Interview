// const arr = [5,6,1,3,8,2];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > arr[i+1]){
//         let temp = arr[i+1];
//         arr[i+1] = arr[i];
//         arr[i] = temp;
//         i = -1;
//     }
// }

// Q. 1
// const sortingArr = () => {
//     let arr = [5,8,9,6,2,7,1];
    
//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr)
// }

// sortingArr()

// Q. 2
// const sortingArrObj = () => {
    // let arr = [
    //     {name: 'Greet', gender: 'Male'},
    //     {name: 'Abhisek', gender: 'Male'},
    //     {name: 'Rohit', gender: 'Male'},
    //     {name: 'Ruhi', gender: 'Feamle'},
    // ];
    
//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j < arr.length-1; j++){
//             if(arr[j].gender > arr[j+1].gender){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr)
// }
// sortingArrObj()

// Q. 3
// const removeDuplicteArr = () => {
//     let arr = [5,9,6,8,5,9,8];
//     // let result = arr.filter((item, index) => arr.indexOf(item) == index);
//     // console.log(result)
//     const uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//           uniqueArray.push(arr[i]);
//         }
//       }

//     console.log('uniqueArray :>> ', uniqueArray);
// }
// removeDuplicteArr()

// Q.4
// const removeDuplicteArrObj = () => {
    // let arr = [
    //     {name: 'Amit', email: 'amit@yopmail.com'},
    //     {name: 'Rohit', email: 'rohit@yopmail.com'},
    //     {name: 'Rahul', email: 'rahul@yopmail.com'},
    //     {name: 'Amit', email: 'amit@yopmail.com'},
    //     {name: 'Amit', email: 'amit@yopmail.com'},
    // ];

//     let uniqueObj = {};
//     let result = [];

//     for(let i = 0; i < arr.length; i++){         
//         if(!uniqueObj[arr[i].name]){
//             uniqueObj[arr[i].name] = true;
//             result.push(arr[i])
//         }
//     }
//     console.log(result)
// }

// removeDuplicteArrObj()

// Q. 5 
// const findMissingNum = () => {
//     let arr = [1,5,6,8,10];
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let misingNum = []
    
//     for(let i = min; i <= max; i++){
//         if(!arr.includes(i)){
//             misingNum.push(i)
//         }
//     }
//     console.log(misingNum)
// }
// findMissingNum()

// Q. 6
// const sort = () => {
//     let arr = [5,9,6,8,1];
//     arr.sort((a, b) => a - b);
//     console.log(arr)
// }
// sort()

// Q. 7 
// const findDuplicateElement = () => {
//     let arr = [1,5,8,5,9,8,1,8];
//     let result = arr.filter((item, indexe) => arr.indexOf(item) != indexe);
//     console.log(result);
// }
// findDuplicateElement()

// Q. 8 (Inbuild) Find smallest and largest element in array
// const smlLargElement = () => {
//     let arr = [5,3,0,6,1,9,2]
//     const smallest = Math.min(...arr)
//     const largest = Math.max(...arr)
//     console.log('smallest :>> ', smallest);
//     console.log('largest :>> ', largest);
// }

// smlLargElement()

// Q. 8 (Custom) Find smallest and largest element in array
// const customSmlLargElement = () => {
//     let arr = [5,3,6,9,2,15,0];
//     let smallest = arr[0];
//     let largest = arr[0];

//     // Smallest
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }

//     // Largest
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     console.log('smallest :>> ', smallest);
//     console.log('largest :>> ', largest);
// }

// customSmlLargElement()

// Q. 9 Remove undefined and null from object
// const removeUndNul = () => {
    // const obj = {
    //     a: 1,
    //     b: null,
    //     c: undefined,
    //     d: 2
    // }
//     let newObj = {};

//     for(let key in obj){
//         if(obj[key] != undefined || obj[key] != null){
//             newObj[key] = obj[key];
//         }
//     }
    
//     console.log('newObj :>> ', newObj);
// }
// removeUndNul()

// Q. 10 find index of Captial letter
// const getCapLetIndex = () => {
//     const arr = ['a', 'M', 'X', 'j', 'Y'];
//     let index = [];

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == arr[i].toUpperCase()){
//             index.push(i)
//         }
//     }
//     console.log('index :>> ', index);
// }

// getCapLetIndex()

// Q. 11 Find palindrome
// const palindrome = () => {
//     let str = 'madam';
//     let reverseStr = str.split("").reverse().join("");
//     let result = false;
//     if(reverseStr == str) result = true;

//     console.log('result :>> ', result);
        
// }
// palindrome()

// Q. 12 Reverse the string
// const reverseStr = () => {
//     let str = 'abcdef';
//     let reverseStr = str.split("").reverse().join("");
//     console.log('reverseStr :>> ', reverseStr);

//     // let result
//     // for(let i = str.length -1; i > 0; i--){
//     //     result += str[i]
//     // }
//     // console.log('result :>> ', result);
// }
// reverseStr()

// Q. 13 Captilized first letter of word
// const CapFirstLett = () => {
//     const capitalizedArray = [];
//     const array = ["apple", "banana", "cherry"];

//     for (let word of array) {
//       const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       capitalizedArray.push(capitalizedWord);
//     }
  
//     console.log('capitalizedArray :>> ', capitalizedArray);
// }
// CapFirstLett()

// Q. 14 Display TRUE if array containing duplicate if not duplicate display FALSE
// function containsDuplicates() {
//     let array = [1, 2, 3, 4, 5, 2];
//     const elementCounts = {};

//     for (const element of array) {
//         if (elementCounts[element]) {
//             return true;
//         }
//         elementCounts[element] = true;
//     }

//     return false;
// }
// containsDuplicates()

// Q. 15
// const promise = new Promise((res, rej) => {
//     res(2)
// })

// Q. 16
// promise.then((result)=> {
//     console.log(result)
//     return result*2;
// }).then((result)=> {
//     console.log(result)
//     return result*2;
// }).then((result)=> {
//     console.log(result)
//     return result*2;
// }).catch((err)=> {
//     return err
// })

// Q. 17 if i have five words how do i convert first second and four word as captial letter in javascript
// const srt = () => {
//     let str = "apple mango are good";
//     str = str.split(" ")
    
//     let result = []
    
//     for(let i=0; i<str.length; i++){
//         if( i== 1 || i== 3){
//             let capLet = str[i].charAt(0).toLocaleUpperCase() + str[i].slice(1)
//             result.push(capLet)
//         }else{
//             result.push(str[i])
//         }
//     }
//     console.log('newObj :>> ', result.join(" "));
// }

// srt()

// Q. 18 Output should be { abc: 3, ccr: 2, jtv: 1 }
// const count = () => {
//     let arr = ['abc','bac','bac','ccr','rcc','vtj']
//     let newArr = [];
//     let obj = {};

//     for(let i = 0; i < arr.length; i++){
//         let strArr = arr[i].split("");
//         newArr.push(strArr.sort().join(""))
//     }

//     for(let i = 0; i < arr.length; i++){
//         if(!obj[newArr[i]]){
//             obj[newArr[i]] = 1
//         }else{
//             obj[newArr[i]] = obj[newArr[i]] + 1
//         }
//     }
//     console.log('obj :>> ', obj);
// }

// count()

// Q. 19 
// function twoSum(nums, target) {
//     const numToIndexMap = {}; // Create a map to store numbers and their indices
  
//     for (let i = 0; i < nums.length; i++) {
//       console.log('numToIndexMap :>> ', numToIndexMap);
//       const complement = target - nums[i];
//       console.log('complement :>> ', complement);
  
//       // Check if the complement exists in the map
//       if (numToIndexMap.hasOwnProperty(complement)) {
//         // Return the indices of the two numbers that add up to the target
//         return [numToIndexMap[complement], i];
//       }
//       // Store the current number and its index in the map
//       numToIndexMap[nums[i]] = i;
//     }
  
//     // If no solution is found, return an empty array or handle the error as needed
//     return [];
//   }
  
//   // Example usage:
//   const nums = [2, 7, 11, 15];
//   const target = 22;
//   const result = twoSum(nums, target);
//   console.log(result); 


// Q. 20 Rotate the array by two places
// const input = [2,7,11,4,-2];

// let slicedItem = input.splice(input.length - 2, 2)
// input.unshift(...slicedItem)
// console.log('input :>> ', input);

// Q. 21
// const fincCommonKeyValue = () => {
//     const input1 = {a:15, b:5, c:8, d:10, e:15}
//     const input2 = {a:5, e:15, f:10, d:10};
    
//     let newObj = {};
    
//     for(let key in input1){
//         if(input1[key] == input2[key]){
//             newObj[key] = input1[key]
//         }
//     }
    
//     console.log('newObj :>> ', newObj);
// }

// fincCommonKeyValue()

// Q. 22 Find the first missing odd number
// const missingOddNum = () => {
//     let arr = [5, 7, 9, 11, 15, 17, 20];
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     for(let i = min; i<max; i++){
//         if(i % 2 == 1){
//             if(!arr.includes(i)){
//                 console.log(i)
//                 return
//             }
//         }
//     }
// }
// missingOddNum()


// Q. 23 Swaip number without third variable
// const swaipNum = () => {
//     let a = 5;
//     let b = 10;
    
//     console.log("Before swapping: a =", a, "b =", b);
    
//     a = a + b; 
//     b = a - b; 
//     a = a - b; 
    
//     console.log("After swapping: a =", a, "b =", b);

// }
// swaipNum()


//  Q. 24 Async Await question
// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Result from asyncFunction1');
//       }, 1000);
//     });
//   }
  
//   function asyncFunction2(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`Result from asyncFunction2 with data: ${data}`);
//       }, 500);
//     });
//   }
  
//   function asyncFunction3(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`Result from asyncFunction3 with data: ${data}`);
//       }, 800);
//     });
//   }
  
//   // Converting to async/await
//   async function main() {
//     try {
//       const result1 = await asyncFunction1();
//       console.log(result1);
  
//       const result2 = await asyncFunction2(result1);
//       console.log(result2);
  
//       const result3 = await asyncFunction3(result2);
//       console.log(result3);
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
//   // Call the async main function
//   main();

// Q. 25 Reverse string word wise 
// const reverseStr = () => {
//     let str = 'This is Javascript Code';
//     str = str.split(" ");
//     const reverseStrArr = [];

//     for(let i = 0; i < str.length; i++){
//         let newStr = str[i];
//         reverseStrArr.push(newStr.split("").reverse().join(""))
//     }
//    let result =  reverseStrArr.join(" ")
//    console.log('result :>> ', result);
// }

// reverseStr()


// Q. 26 Find max occuring character
// const maxOccuringChar = () => {
//     let str = 'This is Javascript Code and you to find max char';
//     str = str.split("");
//     let obj = {};

//     for(let i = 0; i < str.length; i++){
//         if(str[i] != ' '){
//             if(!obj[str[i]]){
//                 obj[str[i]] = 1
//             }else{
//                 obj[str[i]] =  obj[str[i]] +  1
//             }
//         }
//     }

//     let max = -Infinity; // Initialize max with the smallest possible number
//     let keyName = '';
//     for(let key in obj){
//         if(obj[key] > max ){
//             max = obj[key];
//             keyName = key;
//         }
//     }

//     let result = { [keyName]: max };
//     console.log('result :>> ', result);
// }

// maxOccuringChar()

// Q. 27 Display letter in alphabetical order
// Input = "apple"
// Output = "aelpp"
// const letterAlphaOrder = () => {
//     let str = "apple";
//     let result = str.split("").sort().join("");
//     console.log('result :>> ', result);
// }

// letterAlphaOrder()

// Q. 28 Print factorial number
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

// Q. 29
// function isPrime(n) {
//     if (n <= 1)
//         return false;

//     // Check from 2 to n-1
//     for (let i = 2; i < n; i++){
//         if (n % i == 0)
//             return false;
//     }

//     return true;
// }

// console.log(isPrime(10))

// Q. 30
// function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

// Q. 31 
// function printFibonacciSeries(n) {
//     let fibArray = [];
//     fibArray[0] = 0;
//     fibArray[1] = 1;
  
//     for (let i = 2; i < n; i++) {
//       fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//     }
  
//     return fibArray;
//   }
  
//   // Example usage:
//   const n = 10; // Change this to the desired number of Fibonacci numbers
//   const fibonacciSeries = printFibonacciSeries(n);
//   console.log(fibonacciSeries.join(', '));

// Q. 32 Find the factor of given number    
// const findFactor = () => {
//     const num = 10;
//     for(let i = 0; i <=num; i++){
//         if(num % i == 0){
//             console.log(i);
//         }
//     }
// }
// findFactor()

// Q. 33 How to compare two array
// const compareTwoArr = () => {
//     let arr1 = [1,2,3,4,5]
//     let arr2 = [1,3,2,5,4]
    
//    let status = arr1.every((item) => {
//        return arr2.includes(item)
//     });
//     console.log('status :>> ', status);
// }

// compareTwoArr()

// Q 34 Find common value between two array
// const findIntersection = () => {
//     let arr1 = [1,2,3,4,4,5,5]
//     let arr2 = [10,12,3,4,4,5]

//    let result = arr1.filter((item) => {
//        return arr2.includes(item)
//     })
//     result = [...new Set(result)];
//     console.log('result :>> ', result);
// }

// findIntersection()

// Q. 35 Find UNION of two arrays
// function getUnion() {
//     let arr1 = [1,2,6,8,17];
//     let arr2 = [4,8,6,9,19,12,17];
//     let mergedArr = [...arr1, ...arr2];
//     let result = [...new Set(mergedArr)]
//     console.log('result :>> ', result);
// }

// getUnion();

// Q. 36 How to check the given input is Array or Not
// const checkArr = (input) => {
//     let result = Array.isArray(input);
//     console.log('result :>> ', result);
//  }
//  checkArr([])
//  checkArr({})

// Q. 37 How to check given number is Integer
// const checkInteger = () => {
//     const input = 15.5;
//     // Inbuild
//       let result = Number.isInteger(input);
//       console.log('result :>> ', result);
    
//     // Custom 
//         if(input % 1 == 0)
//         console.log('true :>> ', true);
//         else
//         console.log('false :>> ', false);
// }

// checkInteger()

// Q. 38 Randomise array element Or suffle the array
// const shuffleArray = () => {
//     const myArray = [1, 2, 3, 4, 5];
//     for(let i = myArray.length - 1 ; i > 0; i--){
//       let random = Math.floor(Math.random()*myArray[i]);

//       let temp = myArray[i];
//       myArray[i] = myArray[random];
//       myArray[random] = temp;
//     }   
//     console.log('myArray :>> ', myArray);
// }

// shuffleArray()

// Q. 39
// const zeroMatrix = (matrix,n) => {
//     /*
    
//         4   1   3           4   1   0
//        [2  -4   0] ------> [0   0   0]
//         5   9   2           5   9   0
    
//     */
//         for(let r=0; r<n; r++){
//             for(let c=0; c<n; c++){
//                 if(matrix[r][c] === 0)
//                     matrix[r][c] = true
//             }
//         }
    
//         // find the location and zero
//         for(let r=0; r<n; r++){
//             for(let c=0; c<n; c++){
//                 if(matrix[r][c] === true){
//                     // Zero row
//                     for(let i=0; i<n; i++){
//                         matrix[r][i] = 0;
//                     }
//                     // Zero col
//                     for(let i=0; i<n; i++){
//                         matrix[i][c] = 0
//                     }
//                 }       
//             }
//         }

//         // Print Matrix formate
//         // for(let r=0; r<n; r++){
//         //     let result = '';
//         //     for(let c=0; c<n; c++){
//         //       result +="  "+ matrix[r][c]
//         //     }
//         //     console.log(result)
//         // }
//         return matrix;
// }
// const matrix = [[4,1,3], [2,-4,0], [5,9,2]];
// console.log(zeroMatrix(matrix, 3));

// Q. 40
// const sortMatrix = (matrix, n) => {
//     /*
//         5   4   7           1  2  3
//         1   3   8  ------>  4  5  6
//         2   9   6           7  8  9
//     */
//     let k = 0;
//     let temp = []
//     for(let r=0; r<n; r++){
//         for(let c=0; c<n; c++){
//             temp.push(matrix[r][c])
//         }
//     }
//     temp.reverse();

//     for(let r=0; r<n; r++){
//         for(let c=0; c<n; c++){
//             matrix[r][c] = temp[k++]
//         }
//     }

//     // Print Matrix formate
//     for(let r=0; r<n; r++){
//         let result = '';
//         for(let c=0; c<n; c++){
//             result +="  "+ matrix[r][c]
//         }
//         console.log(result)
//     }
// }

// const matrix = [ [ 5, 4, 7 ], [ 1, 3, 8 ], [ 2, 9, 6 ] ];
// const n = 3;
// sortMatrix(matrix, n)

// Q. 41 Rotate matrix by 90 degrees 
// const rotateMatrix = (matrix, n) => {
//     /*
//         1  2  3           7  4  1
//         4  5  6  ------>  8  5  2
//         7  8  9           9  6  3
//     */
//    let arr = [];
//     for(let r=0; r<n; r++){
//         let k = r;
//         let newArr = [];
//         for(let c=0; c<n; c++){
//             newArr.push(matrix[c][k])
//         }   
//         arr.push(newArr);
//         newArr = [];
//     }

//     let reverseArr = [];

//     for(let r=0; r<n; r++){
//         reverseArr.push(arr[r].reverse())
//     }

//     // Print Matrix Formate
//     for(let r=0; r<n; r++){
//         let result = ''
//         for(let c=0; c<n; c++){
//             result += "  "+reverseArr[r][c];
//         }
//         console.log(result);
//     }
// }

// const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const n = 3;
// rotateMatrix(matrix, n);

// Q. 42 Check given string is Anagram or Not
// const isAnagram = () => {
//     let firstWord = 'Mary';
//     let secondWore = 'rmAy';

//     firstWord =  firstWord.toLocaleLowerCase().split("").sort().join("")
//     secondWore = secondWore.toLocaleLowerCase().split("").sort().join("")

//     if(firstWord == secondWore){
//         console.log('Anagaram')
//     }else{
//         console.log('Not Anagoram')
//     }
// }

// isAnagram()

// Q. 43 Display only non repeaing value
// const getNonRepeatingValue = () => {
//     let arr = [1,2,3,5,6,2,6,8,9,8]

//     let obj = {};

//     for(let i = 0; i<arr.length; i++){
//         if(!obj.hasOwnProperty(arr[i])){
//             obj[arr[i]] = 1;
//         }else{
//             obj[arr[i]] = obj[arr[i]] + 1;
//         }
//     }
//    let result = arr.filter((item, index) => obj[item] == 1)
//    console.log('result :>> ', result);
// }

// getNonRepeatingValue()

// Q. 44 Write a program for valid braickets
// function isValid(s) {
//     const stack = [];
//     const bracketPairs = {
//       ')': '(',
//       '}': '{',
//       ']': '[',
//     };
  
//     for (let i = 0; i < s.length; i++) {
//       const char = s[i];
//       if (char in bracketPairs) {
//         // If it's a closing bracket
//         const topElement = stack.pop(); // Use '#' as a placeholder for an empty stack
//         if (bracketPairs[char] !== topElement) {
//           return false;
//         }
//       } else {
//         // If it's an opening bracket, push it onto the stack
//         stack.push(char);
//       }
//     }
    
//     // If the stack is empty, it means all brackets were matched
//     return stack.length === 0;
//   }
  
//   // Example usage:
//   const input1 = "(("; // Valid
//   const input2 = "()[]{}"; // Valid
//   const input3 = "(]"; // Invalid
//   const input4 = "([)]"; // Invalid
//   const input5 = "{[]}"; // Valid
  
//   console.log(isValid(input1)); // true
//   console.log(isValid(input2)); // true
//   console.log(isValid(input3)); // false
//   console.log(isValid(input4)); // false
//   console.log(isValid(input5)); // true


// Q. 45 How to reverse number
// function reverseNumber(number) {
//     // Convert the number to a string
//     const numberString = number.toString();
  
//     // Reverse the string
//     const reversedString = numberString.split('').reverse().join('');
  
//     // Convert the reversed string back to a number
//     const reversedNumber = parseFloat(reversedString);
  
//     return reversedNumber;
//   }
  
//   // Example usage:
//   const originalNumber = 12345;
//   const reversed = reverseNumber(originalNumber);
//   console.log(reversed); // Outputs: 54321


// Q. 46 Write a program of fizzBuzz to 100 number
// function fizzBuzz(limit) {
//     for (let i = 1; i <= limit; i++) {
//       // Check for multiples of both 3 and 5 first
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } 
//       // Check for multiples of 3
//       else if (i % 3 === 0) {
//         console.log("Fizz");
//       }
//       // Check for multiples of 5
//       else if (i % 5 === 0) {
//         console.log("Buzz");
//       } 
//       // If not a multiple of 3 or 5, print the number
//       else {
//         console.log(i);
//       }
//     }
//   }
  
//   // Call the fizzBuzz function with a limit of 100
//   fizzBuzz(100);


// Q. 47 Call, Apply, Bind
// const person_1 = {
//     name: "Rahul",
//     age: 25
// }

// const person_2 = {
//     name: "Mohit",
//     age: 26
// }

// function displayPersonDetails(state, country){
//     console.log('Name ::>',this.name)
//     console.log('Age ::>',this.age)
//     console.log('State ::>',state)
//     console.log('Country ::>',country)
// }

// const callMeLetter = displayPersonDetails.apply(person_2, ['Bihar', 'India']);
// // callMeLetter()