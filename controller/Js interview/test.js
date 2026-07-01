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