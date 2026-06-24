function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (
            typeof item === "object" &&
            item !== null
          ) {
            flattenObject(
              item,
              `${newKey}.${index}`,
              result
            );
          } else {
            result[`${newKey}.${index}`] = item;
          }
        });
      } else {
        flattenObject(value, newKey, result);
      }
    } else {
      result[newKey] = value;
    }
  }

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

console.log(flattenObject(obj));
