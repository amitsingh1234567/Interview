/*
===================> Top 50 Question by chatGpt <==================
Q.1 Group objects by a property (like _.groupBy).
Q.2 Find keys with maximum value in an object. 
Q.3 Implement array chunking (split array into smaller arrays)
Q.4 Merge two objects deeply


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