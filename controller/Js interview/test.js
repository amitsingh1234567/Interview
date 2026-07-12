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
      console.log("🚀 ~ countLeaves ~ count:", count)
      
    } else {
      count++;
    }
  }

  return count;
};


const nestedObject = {
  a: 'x',
  b: {
    c: 'y',
    d: {
      e: 'z',
      f: 'w',
    }
  },
  g: 'v',
  h: 'u',
  i: 't',
};

const leafCount = countLeaves(nestedObject);
console.log(leafCount);