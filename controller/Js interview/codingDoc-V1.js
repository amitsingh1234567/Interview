/*
===================> Top 50 Question by chatGpt <==================
Q.1 Group objects by a property (like _.groupBy).
Q.2 Find keys with maximum value in an object. 
Q.3 Implement array chunking (split array into smaller arrays)
Q.4 Merge two objects deeply
Q.5 Find the longest common prefix in an array of strings.
let a = {}; let b = { key: 'b' }; let c = { key: 'c' }; a[b] = 123; a[c] = 456; console.log(a[b]);
console.log(a)


[
[1, 2, 3, 4],
[12,13,14,5],
[11,16,15,6],
[10, 9, 8, 7]
]


A
Am
Ami
Amit
*/


// 1. Group objects by a property (like _.groupBy)
/*
function groupBy(array, prop) {
  const grouped = {};

  for (const item of array) {
    const key = item[prop]; 

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  }

  return grouped;
}


const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
  { name: "Eve", age: 30 }
];

const groupedByAge = groupBy(users, "age");
console.log(groupedByAge);
*/

// Q.2 Find keys with maximum value in an object.
/*
function maxKeyValueInObject(){
  const obj = { a: 2, b: 1, c: 1, d: 3, e: 4, f: 4, i: 1 };
  var maxValue = Math.max(...Object.values(obj))
  const maxKeys = Object.keys(obj).filter(key => obj[key] === maxValue)
  console.log({maxValue, maxKey: maxKeys})
}

maxKeyValueInObject()
*/

// Q.3 Implement array chunking (split array into smaller arrays)
/*
function chunkArray(arr, size) {
  if (size <= 0) throw new Error("Chunk size must be > 0");
  let result = [];
  let copy = [...arr]; // avoid mutating input

  while (copy.length) {
    result.push(copy.splice(0, size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
*/

// Q.4 Merge two objects deeply
/*
function mergeObjDeeply(obj1, obj2){
  const result = { ...obj1 };
  for(let key in obj2){ 
    if(obj2.hasOwnProperty(key) && typeof obj2[key] === 'object' && obj2[key] != null && !Array.isArray(obj2[key])){
      result[key] = mergeObjDeeply(result[key] || {}, obj2[key]);
    }else{
      result[key] = obj2[key];
    }
  };

  return result;
}

const obj1 = {
  name: "John",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const obj2 = {
  age: 25,
  address: {
    zone: "North",
    pin: 560001 // should overwrite obj1 pin
  }
};
console.log(mergeObjDeeply(obj1, obj2));
*/

// Q.5 Find the longest common prefix in an array of strings.
/*
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["interview", "internet", "internal"])); // "inte"

[
[1, 2, 3, 4],
[12,13,14,5],
[11,16,15,6],
[10, 9, 8, 7]
]


function generateSpiral(n) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  let top = 0, bottom = n - 1;
  let left = 0, right = n - 1;
  let num = 1;
  while (top <= bottom && left <= right) {
    // left → right
    for (let i = left; i <= right; i++) result[top][i] = num++;
    top++;

    // top → bottom
    for (let i = top; i <= bottom; i++) result[i][right] = num++;
    right--;

    // right → left
    for (let i = right; i >= left; i--) result[bottom][i] = num++;
    bottom--;

    // bottom → top
    for (let i = bottom; i >= top; i--) result[i][left] = num++;
    left++;
  }
  return result;
}
console.log(generateSpiral(4));




const promise2 = 4;
const promise1 = Promise.reject(3);
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Foo');
});

Promise.all([promise2, promise1, promise3]).then(res => {
    console.log(res)
}).catch(err => console.log("err", err))

// Promise.allSettled([promise1, promise2, promise3]).then(res => {
//     console.log(res)
// })

// const p1 = Promise.reject(0);
// const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const p3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// Promise.any([p1, p2, p3]).then((res) => console.log(res));


// const p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'quick'));
// const p3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
// const p1 = Promise.resolve('13')
// const p2 = Promise.resolve('11')
// Promise.race([p2, p1]).then((res) => console.log(res)).catch(console.log);


*/

