/*
=================> TOP 50 OBJECT BASED Q <================

=================> Foundational Object Manipulation <================
Q.1 Create from Arrays: Convert two separate arrays of keys and values into a single JavaScript object.#.
Q.2 Count Property Occurrences: Count occurrences of unique string characters or array items, storing results in an object.#. 
Q.3 Check Empty Object: Write a utility to reliably check if a given object is completely empty.#.
Q.4 Remove Null/Undefined: Filter out all keys that contain null or undefined values from a profile configuration object.#.
Q.5 Invert Keys & Values: Swap an object’s keys with its values (assuming values are unique strings).#.
Q.6 Object to Query String: Convert an object like { search: "js", page: 2 } into a URL query parameter string.#.
Q.7 Extract Specific Keys: Create a function that accepts an object and an array of target keys, returning a picked sub-object.#.
Q.8 Omit Specific Keys: Write a function to exclude given keys from an object while returning the remaining properties.#.

=================> Intermediate Transformation <================
Q.1 Deep Object Comparison: Build a deep equality validator to see if two nested objects are identical.#.
Q.2 Deep Clone Implementation: Write a native recursive deep clone function to completely isolate nested structures.#
Q.3 Merge Non-Overwriting: Combine two data objects, preventing values in the second object from replacing keys in the first.#
Q.4 Deep Merge Objects: Merge two complex nested objects recursively, combining matching inner objects together.+
Q.5 Deep Merge Objects: Merge two complex nested objects recursively, combining matching inner objects together.+
Q.6 Set Deep Value by Path: Dynamically set or update an object's nested properties using a path string.#
Q.7 Group Array of Objects: Group a list of users into an object categorized by a shared property like role or age.#
Q.8 Sum Property Values: Accumulate the total cost from an array of item objects representing a digital shopping cart.#
Q.9 Key Case Converter: Convert all keys within an object dynamically from snake_case format over to camelCase.#
Q.10 Flatten Nested Object: Transform a highly nested JSON structure into a flat single-level key-value dictionary.#
Q.11 Unflatten Flat Object: Take a flattened object containing dot-notation keys and rebuild its nested structure.#
Q.12 Frequency Mapping: Read a long paragraph of text and generate a word-frequency counter dictionary object.#
Q.13 Map Object Values: Transform the values inside an object using a callback function while keeping the keys intact.#
Q.14 Write a function that returns the deepest key-value pair in a nested object.#
Q.15 Find Deep Value by Path: Fetch an inner value from an object using a string dot-notation path like 'user.profile.id'n+
Q.16 Object Key Sorting: Sort the keys of an object alphabetically, returning a new object with the same values but ordered keys.+

=================> Advanced Object Manipulation <================
Q.1 Object Key Filtering: Create a function that filters an object’s keys based on a provided predicate function.+
Q.2 Object-Based Cache Mechanism: Implement a custom temporary memory cache utilizing key-value lookup strategies.#
Q.3 Memoization Cache Storage: Write a memoize function that caches expensive function returns inside an internal object lookup.#
Q.4 Count Leaves in Tree Object: Calculate the total number of endpoint values inside an arbitrarily deep tree-like object.n+
Q.5 Write a program to check valid brackets. n+
Q.6 Sorting Objects by Keys: Take an unsorted config object and output an identical object with keys ordered alphabetically.n+
Q.7 Diff Two Objects: Compare two configurations and return an object explicitly detailing changed, added, or removed keys.n+
Q.8 Array of Objects Deduplication: Filter out duplicate objects from an array by evaluating a unique key like id.n+
Q.9 Transform Object to Array: Map an object's structural key-value fields into a clean array of objects containing id descriptors.n+
Q.10 Filter Nested Arrays: Remove nested objects matching specific criteria within a grand parent database object.n+
Q.11 Property Existence: Check if a specific property exists directly on an object versus inheriting from its prototype chain.n+

*/





// =================> TOP 50 OBJECT BASED Q <================

// =================> Foundational Object Manipulation <================

// Q.1 Create from Arrays: Convert two separate arrays of keys and values into a single JavaScript object.
/*
function createObj(keys, values){
    return keys.reduce((obj, key, index) => {
       obj[key] = values[index];
       return obj;
    }, {});
}

const keys = ["name", "age", "city"];
const values = ["Amit", 30, "Delhi"];

console.log(createObj(keys, values));

*/

// Q.2 Count Property Occurrences: Count occurrences of unique string characters or array items, storing results in an object.
/*
function countCharacters(str) {
  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(countCharacters("banana"));
*/

// Q.3 Check Empty Object: Write a utility to reliably check if a given object is completely empty.
/*
function isEmpty(obj) {
  for (let key in obj) {
    if (Object.hasOwn(obj, key)) {
      return false;
    }
  }
  return true;
}

console.log(isEmpty({}));          // true
console.log(isEmpty({ a: 1 }));    // false
console.log(isEmpty(null));        // true
console.log(isEmpty(undefined));   // true

*/

// Q.4 Remove Null/Undefined: Filter out all keys that contain null or undefined values from a profile configuration object
/*
function removeNullUndefined(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value != null && value !== undefined)
  );
}

const profile = {
  name: "Amit",
  age: null,
  city: "Delhi",
  email: undefined,
  phone: "1234567890"
};

console.log(removeNullUndefined(profile));
*/

// Q.5 Invert Keys & Values: Swap an object’s keys with its values (assuming values are unique strings).
/*
function invertObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

const obj = {
  name: "Amit",
  city: "Delhi",
  role: "Developer"
};

console.log(invertObject(obj));
*/

// Q.6 Object to Query String: Convert an object like { search: "js", page: 2 } into a URL query parameter string.
/*
============> Approach-1 <===========
function objectToQueryString(obj) {
  return new URLSearchParams(obj).toString();
}

const params = {
  search: "js",
  page: 2
};

console.log(objectToQueryString(params));

============> Approach-2 <===========
function objectToQueryString(obj) {
  return Object.entries(obj)
    .filter(([_, value]) => value != null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

const params = {
  search: "javascript tutorial",
  city: "New Delhi"
};

console.log(objectToQueryString(params))

============> Reverse Operation (Often Asked Next) <===========
const query = "search=js&page=2";

const obj = Object.fromEntries(
  new URLSearchParams(query)
);

console.log(obj);

Manual Parsing (Interview-Friendly) =>
-----------------------------------
function queryStringToObject(query) {
  const result = {};

  query.split("&").forEach(pair => {
    const [key, value] = pair.split("=");

    result[
      decodeURIComponent(key)
    ] = decodeURIComponent(value);
  });

  return result;
}

console.log(queryStringToObject("search=javascript%20tutorial&city=New%20Delhi"));

*/

// Q.7 Extract Specific Keys: Create a function that accepts an object and an array of target keys, returning a picked sub-object.
/*
Plain Object =>
---------------
function pick(obj, keys) {
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

const user = {
  name: "Amit",
  age: 30,
  city: "Delhi",
  role: "Developer"
};

console.log(pick(user, ["name", "city"]));

Nested Object =>
----------------
function getSelectedkey(user, targetKeys){
    const result = {};
    
    function getKey(source, target, path, index = 0){
        const key = path[index];
        
        if(index === path.length - 1){
            target[key] = source[key];
            return;
        };
        
        target[key] = target[key] || {};
        
        getKey(
            source[key],
            target[key],
            path,
            index + 1
        );
    };
    
    targetKeys.forEach(item => {
        getKey(user, result, item.split('.'));
    });
    
    return result
};

const user = {
  name: "Amit",
  age: 30,
  city: "Delhi",
  role: "Developer",
  add: {
      contact: "8955525555",
      email: "greet@gmail.com"
  }
};

console.log(getSelectedkey(user, ['name', 'age', 'add.contact']))

*/

// Q.8 Omit Specific Keys: Write a function to exclude given keys from an object while returning the remaining properties.
/*
function omit(obj, keysToRemove) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key]) => !keysToRemove.includes(key)
    )
  );
}

const user = {
  name: "Amit",
  age: 30,
  city: "Delhi",
  role: "Developer"
};

console.log(omit(user, ["age", "role"]));
*/


// =================> Intermediate Transformation <================

// Q.1 Deep Object Comparison: Build a deep equality validator to see if two nested objects are identical
/*
function deepEqual(obj1, obj2){
    if(obj1 === obj2) return true;

    if(obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 != 'object'){
        return false;
    };

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length != keys2.length) return false;

    for(let key of keys1){
        if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])){
            return false;
        }
    };

    return true;
}

  const obj1 = {
    name: 'John',
    age: 31,
    address: {
      city: 'New York',
      postalCode: 10001
    }
  };

  const obj2 = {
    name: 'John',
    age: 31,
    address: {
      city: 'New York',
      postalCode: 10001
    }
  };

console.log(deepEqual(obj1, obj2));
*/

// Q.2 Deep Clone Implementation: Write a native recursive deep clone function to completely isolate nested structures
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

const obj = {
  skills: ["JavaScript", "Angular"],
  projects: [
    {
      name: "Project A",
      age: 21
    }
  ]
};

const copy = makeDeepCopy(obj);
copy.projects[0].name = "Project B";
copy.skills[0] = 'JAVA'

console.log('Copy =>',copy)
console.log('Original =>',obj)
*/  

// Q.3 Merge Non-Overwriting: Combine two data objects, preventing values in the second object from replacing keys in the first.
/*
function mergeWithoutOverwrite(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (!(key in result)) {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = {
  name: "Amit",
  age: 30
};

const obj2 = {
  age: 35,
  city: "Delhi"
};

console.log(mergeWithoutOverwrite(obj1, obj2));
*/

// Q.4 Deep Merge Objects: Merge two complex nested objects recursively, combining matching inner objects together.
/*
function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      key in result &&
      typeof result[key] === "object" &&
      result[key] !== null &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      !Array.isArray(result[key]) &&
      !Array.isArray(obj2[key])
    ) {
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = {
  name: "Amit",
  address: {
    city: "Delhi",
    pin: 110001
  }
}; 

const obj2 = {
  age: 30,
  address: {
    state: "Delhi",
    pin: 110002
  }
};

console.log(deepMerge(obj1, obj2))
*/

// Q.5 Deep Merge Objects: Merge two complex nested objects recursively, combining matching inner objects together.
/*
function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      Array.isArray(result[key]) &&
      Array.isArray(obj2[key])
    ) {
      result[key] = [...result[key], ...obj2[key]];
    }else{
      if (
        
        typeof result[key] === "object" &&
        result[key] !== null &&
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        !Array.isArray(result[key]) &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = deepMerge(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

const obj1 = {
  skills: ["JS"],
  address: {
    city: "Delhi"
  }
};

const obj2 = {
  skills: ["Angular"],
  address: {
    state: "Delhi"
  }
};

console.log(deepMerge(obj1, obj2))
*/

// Q.6 Set Deep Value by Path: Dynamically set or update an object's nested properties using a path string.
/*
Mutable Solutation (Modifies Original Object) =>
---------------------------------------------
function setValueByPath(obj, path, value) {
  const keys = path.split(".");

  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    // Create missing object if needed
    if (!(key in current)) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;

  return obj;
}

const obj = {
  user: {
    profile: {
      name: "Amit"
    }
  }
};

console.log(setValueByPath(obj, "user.profile.id", 101));


Immutable Solutation (Do not Modifies Original Object) =>
-----------------------------------------------------
function setValueByPath(obj, path, value) {
  const keys = path.split(".");

  const result = { ...obj };

  let current = result;
  let source = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    current[key] = {
      ...(source?.[key] || {})
    };

    current = current[key];
    source = source?.[key];
  }

  current[keys[keys.length - 1]] = value;

  return result;
}

const obj = {
  user: {
    profile: {
      name: "Amit"
    }
  },
  settings: {
    theme: "dark"
  }
}

console.log(setValueByPath(obj, "user.profile.id", 101));
*/

// Q.7 Group Array of Objects: Group a list of users into an object categorized by a shared property like role or age.
/*
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);

    return result;
  }, {});
};

const users = [
  { name: "Amit", role: "Developer" },
  { name: "Rahul", role: "Tester" },
  { name: "John", role: "Developer" },
  { name: "Neha", role: "Tester" }
];

console.log(groupBy(users, "role"));

*/

// Q.8 Sum Property Values: Accumulate the total cost from an array of item objects representing a digital shopping cart.
/*
function sumProperty(arr, key) {
  return arr.reduce((sum, item) => {
    return sum + item[key];
  }, 0);
}

const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

console.log(sumProperty(cart, "price"));
*/

// Q.9 Key Case Converter: Convert all keys within an object dynamically from snake_case format over to camelCase.
/*
function toCamelCase(str) {
  return str.replace(
    /_([a-z])/g,
    (_, char) => char.toUpperCase()
  );
}

function keysToCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(keysToCamelCase);
  }

  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const result = {};

  for (const key in obj) {
    result[toCamelCase(key)] =
      keysToCamelCase(obj[key]);
  }

  return result;
}

const data = {
  first_name: "Amit",
  address_info: {
    city_name: "Delhi",
    postal_code: 110001
  }
};

console.log(keysToCamelCase(data));
*/

// Q.10 Flatten Nested Object: Transform a highly nested JSON structure into a flat single-level key-value dictionary
/*
function flattenObj(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const value = obj[key];
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === 'object' && value != null) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === 'object' && item != null) {
            flattenObj(item, `${newKey}.${index}`, result);
          } else {
            result[`${key}.${index}`] = item;
          }
        })
      } else {
        flattenObj(value, newKey, result);
      }
    } else {
      result[newKey] = value;
    }
  };

  return result;
}

const obj = {
  name: "John",
  age: 25,
  address: {
    city: "Delhi",
    details: {
      pin: "110001",
      landmark: "Near Park"
    }
  },
  hobbies: [{ name: "Reading", age: 30 }, { name: "Swimming", age: 25 }],
  education: ["Bachelors", "Masters", "PhD"]
};
console.log(flattenObj(obj));

*/

// Q.11 Unflatten Flat Object: Take a flattened object containing dot-notation keys and rebuild its nested structure.
/*
function unflattenObject(obj) {
  const result = {};

  for (const path in obj) {
    const keys = path.split(".");
    let current = result;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      const nextKey = keys[i + 1];

      if (!(key in current)) {
        current[key] = /^\d+$/.test(nextKey)
          ? []
          : {};
      }

      current = current[key];
    }

    current[keys[keys.length - 1]] = obj[path];
  }

  return result;
}
const obj = {
  "user.profile.name": "Amit",
  'users.0.name': 'Amit',
  'users.0.add.city': 'Delhi',
  'users.1.name': 'Rahul',
  'users.1.add.city': 'Delhi'
}
console.log(unflattenObject(obj));

*/

// Q.12 Frequency Mapping: Read a long paragraph of text and generate a word-frequency counter dictionary object.
/*
function wordFrequency(text) {
  const words = text.toLowerCase().split(" ");

  const frequency = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
}

const text = "JavaScript is great! JavaScript is powerful.";
console.log(wordFrequency(text))

*/

// Q.13 Map Object Values: Transform the values inside an object using a callback function while keeping the keys intact.
/*
function mapObjectValues(obj, callback) {
  const result = {};

  for (const key in obj) {
    result[key] = callback(obj[key], key);
  }

  return result;
}

const scores = {
  math: 80,
  english: 70,
  science: 90
};

const result = mapObjectValues(
  scores,
  value => value * 2
);

console.log(result);

*/

// Q.14 Write a function that returns the deepest key-value pair in a nested object
/*
function findDeepestPair(obj, depth = 0, parentKey = '') {
  let deepest = { key: parentKey, value: obj, depth };

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        const deeper = findDeepestPair(value, depth + 1, newKey);
        
        if (deeper.depth > deepest.depth) {
          deepest = deeper;
        }
      } else {
        if (depth + 1 > deepest.depth) {
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

// Q.15 Find Deep Value by Path: Fetch an inner value from an object using a string dot-notation path like 'user.profile.id'
/*
function getValueByPath(obj, path) {
  const keys = path.split(".");

  let current = obj;

  for (const key of keys) {
    if (current == null) {
      return undefined;
    }

    current = current[key];
  }

  return current;
}

const obj = {
  users: [
    {
      name: "Amit"
    }
  ],
  education: [
    "B.Tech",
    "M.Tech"
  ]
};

const obj = {
  user: {
    profile: {
      id: 101,
      name: "Amit"
    }
  }
};
console.log(getValueByPath(obj, "users.0.name"));

*/


// =================> Advanced Transformation <================

// Q.1 Object Key Filtering: Create a function that filters an object’s keys based on a provided predicate function.
/*
function filterObject(obj, predicate) {
  const result = {};

  for (const key in obj) {
    if (predicate(obj[key], key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

const inventory = {
  apples: 15,
  bananas: 3,
  oranges: 24,
  secretPasscode: "admin123",
  peaches: 0
};

const filtered = filterObject(
  inventory,
  value => typeof value === "number" && value > 5
);

console.log(filtered);

*/

// Q.2 Object-Based Cache Mechanism: Implement a custom temporary memory cache utilizing key-value lookup strategies
/*
class Cache {
    constructor(){
        this.store = {};
    };
    
    set(key, value, ttl = 5000){
        this.store[key] = {
            value,
            expiry: Date.now() + ttl
        };
    };
    
    get(key){
        const item = this.store[key];
        
        if(!item) return null;
        
        if(Date.now() > item.expiry) {
            delete this.store[key];
            return null;
        };
        
        return item.value;
    }
    
    has(key){
        return key in this.store;
    }
    
    delete(key){
        delete this.store[key];
    };
};

const cache = new Cache();

cache.set("user", {
    name: "Greet",
    age: 25
}, 6000);

console.log(cache.get('user'))

setTimeout(() => {
    console.log(cache.get('user'))
    console.log(cache.has('user'))
}, 7000)

*/

// Q.3 Memoization Cache Storage: Write a memoize function that caches expensive function returns inside an internal object lookup.
/*
  function memoize(fun){
    const cache = {};
    
    return function (...args){  
        const key = JSON.stringify(args);
        
        if(key in cache){
            console.log("Cache Hit..");
            return cache[key];
        };
        
        console.log('Cache Miss');
        const result = fun(...args);
        
        cache[key] = result;
        
        return result;
    }
};

function add(a, b){
    console.log('Calculating...');
    return a + b;
};

function mul(a, b){
    console.log('Calculating...');
    return a * b;
};

const memoizeAdd = memoize(mul);
console.log(memoizeAdd(10, 20));
console.log(memoizeAdd(10, 20));

*/

// Q.4 Count Leaves in Tree Object: Calculate the total number of endpoint values inside an arbitrarily deep tree-like object.
/*
function countLeaves(obj) {
  let count = 0;

  for (const key in obj) {
    const value = obj[key];

    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      count += countLeaves(value);
    } else {
      count++;
    }
  }

  return count;
};


const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: 5
};

const leafCount = countLeaves(nestedObject);
console.log(leafCount);

*/

// Q.5 Write a program to check valid brackets
/*
function isValidBrackets(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (['{', '(', '['].includes(char)) {
            stack.push(char);
        } else if (['}', ']', ')'].includes(char)) {
            if (stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


console.log(isValidBrackets("({[]})"));      
console.log(isValidBrackets("({[})"));      
console.log(isValidBrackets("(([]))"));          
console.log(isValidBrackets("({[})"));

*/

// Q.6 Sorting Objects by Keys: Take an unsorted config object and output an identical object with keys ordered alphabetically.
/*
Plain Object =>
-------------
function sortObjectKeys(obj) {
  const result = {};

  const sortedKeys = Object.keys(obj).sort();

  for (const key of sortedKeys) {
    result[key] = obj[key];
  }

  return result;
}

const config = {
  theme: "dark",
  apiUrl: "https://api.example.com",
  autoSave: true,
  language: "en"
};

console.log(sortObjectKeys(config));

Nested Object =>
-------------
function sortKeysDeep(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    Array.isArray(obj)
  ) {
    return obj;
  }

  const result = {};

  const sortedKeys = Object.keys(obj).sort();

  for (const key of sortedKeys) {
    result[key] = sortKeysDeep(obj[key]);
  }

  return result;
}

const obj = {
  z: 1,
  a: {
    d: 4,
    b: 2
  },
  c: 3
};

console.log(sortKeysDeep(obj));

*/

// Q.7 Diff Two Objects: Compare two configurations and return an object explicitly detailing changed, added, or removed keys.
/*
function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  for (const key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        oldValue: oldObj[key],
        newValue: newObj[key]
      };
    }
  }

  for (const key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
  }

  return result;
};


const oldConfig = {
  theme: "light",
  language: "en",
  notifications: true
};

const newConfig = {
  theme: "dark",
  language: "en",
  autoSave: true
};

console.log(diffObjects(oldConfig, newConfig));

*/

// Q.8 Array of Objects Deduplication: Filter out duplicate objects from an array by evaluating a unique key like id.
/*
function removeDuplicates(arr, key) {
  const seen = new Set();
  const result = [];

  for (const item of arr) {
    if (!seen.has(item[key])) {
      seen.add(item[key]);
      result.push(item);
    }
  }

  return result;
}

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Amit" },
  { id: 3, name: "Neha" },
  { id: 2, name: "Rahul" }
];

console.log(removeDuplicates(users, "id"));

*/

// Q.9 Transform Object to Array: Map an object's structural key-value fields into a clean array of objects containing id descriptors.
/*
function objectToArray(obj) {
  return Object.entries(obj).map(([id, name]) => ({
    id,
    name
  }));
};

const users = {
  101: "Amit",
  102: "Rahul",
  103: "Neha"
};

console.log(objectToArray(users));

Interview Follow-Up 2 => Convert back to Object from Array of Objects
---------------------
function arrayToObject(arr) {
  return arr.reduce((result, item) => {
    result[item.id] = item.name;
    return result;
  }, {});
};

const arr = [
  { id: "101", name: "Amit" },
  { id: "102", name: "Rahul" }
];

console.log(arrayToObject(arr));

*/

// Q.10 Filter Nested Arrays: Remove nested objects matching specific criteria within a grand parent database object.
/*
const companyDatabase = {
  id: "co_991",
  name: "TechCorp",
  departments: [
    {
      deptId: "d_eng",
      name: "Engineering",
      tasks: [
        { taskId: "t1", title: "Fix bug A", status: "assigned" },
        { taskId: "t2", title: "Legacy audit", status: "unassigned" }, 
        { taskId: "t3", title: "Deploy app", status: "assigned" }
      ]
    },
    {
      deptId: "d_hr",
      name: "Human Resources",
      tasks: [
        { taskId: "t4", title: "Payroll check", status: "assigned" },
        { taskId: "t5", title: "Archive files", status: "unassigned" } 
      ]
    }
  ]
};

function removeUnassignedTasks(companyObj) {
  return {
    ...companyObj,
    departments: companyObj.departments.map(dept => ({
      ...dept,
      tasks: dept.tasks.filter(task => task.status !== "unassigned")
    }))
  };
}

const sanitizedDatabase = removeUnassignedTasks(companyDatabase);
console.log(JSON.stringify(sanitizedDatabase, null, 2));

*/

// Q.11 Property Existence: Check if a specific property exists directly on an object versus inheriting from its prototype chain.
/*
// 1. Define a prototype object
const vehiclePrototype = {
  wheels: 4,
  drive() { return "Vroom!"; }
};

// 2. Create an object inheriting from the prototype
const myCar = Object.create(vehiclePrototype);

// 3. Assign a direct property (own property) to the instance
myCar.color = "crimson";

// --- The Existence Checks ---

// Check A: Direct Property
console.log(Object.hasOwn(myCar, "color"));  // true (Exists directly on myCar)

// Check B: Inherited Property
console.log(Object.hasOwn(myCar, "wheels")); // false (Belongs to prototype chain)
console.log(Object.hasOwn(myCar, "drive"));  // false (Belongs to prototype chain)

// Check C: Completely Missing Property
console.log(Object.hasOwn(myCar, "wings"));  // false

console.log("wheels" in myCar);               // true  (Checks the full chain)
console.log(Object.hasOwn(myCar, "wheels")); // false (Checks direct object only)

*/

