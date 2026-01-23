function groupObj(arr, path) {
    const result = {};

    for (let obj of arr) {
        const property = getNestedValue(obj, path);
        if (!result[property]) {
            result[property] = [];
        };
        result[property].push(obj);
    };

    return result;
};


function getNestedValue(obj, path) {
  if (obj == null || !path) return obj;
  let acc = obj;
  for (const key of path.split('.')) {
    if (acc == null) return undefined;
    acc = acc[key];
  }
  return acc;
}

const users = [
    { name: "Alice", age: 25, address: { city: "Delhi", country: "India" } },
    { name: "Bob", age: 30, address: { city: "Mumbai", country: "India" } },
    { name: "Charlie", age: 25, address: { city: "Delhi", country: "India" } },
    { name: "David", age: 30, address: { city: "Bangalore", country: "India" } },
];

console.log(groupObj(users, "address.city"));