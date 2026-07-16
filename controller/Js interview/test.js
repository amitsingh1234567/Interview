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