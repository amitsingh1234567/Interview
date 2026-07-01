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