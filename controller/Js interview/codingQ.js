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
//     let arr = [
//         {name: 'Greet', gender: 'Male'},
//         {name: 'Abhisek', gender: 'Male'},
//         {name: 'Rohit', gender: 'Male'},
//         {name: 'Ruhi', gender: 'Feamle'},
//     ];
    
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
//     let arr = [1,5,8,5,9,8,1, 8];
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
//     const obj = {
//         a: 1,
//         b: null,
//         c: undefined,
//         d: 2
//     }
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
// const sum = () => {
//     const nums = [2, 7, 11, 15];
//     const target = 18;
//     result = [];

//     for(let i = 0; i<nums.length; i++){
//         for(let j = 0; j<nums.length; j++){
//             let sum = nums[i] + nums[j];
//             if(sum == target){
//                 result.push(i)
//                 result.push(j)
//                 return result;
//             }
//         }
//     }
// }

// console.log(sum())


// Q. 20 Rotate the array by two places
// const input = [2,7,11,4,-2];
// const output = [11,4,-2,2,7];

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


// Q.23 Swaip number without third variable
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