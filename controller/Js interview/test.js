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
  details: {
    age: 25,
    address: {
      city: "Delhi",
      location: {
        pin: 110001,
        landmark: "Red Fort"
      }
    }
  }
};

var deepestPair = findDeepestPair(nestedObject);
delete deepestPair.depth;
deepestPair.key = (deepestPair.key.split('.').slice(-1))[0]
console.log(deepestPair);



