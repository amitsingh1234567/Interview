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