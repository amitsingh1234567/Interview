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

// const obj = {
//   users: [
//     {
//       name: "Amit"
//     }
//   ],
//   education: [
//     "B.Tech",
//     "M.Tech"
//   ]
// };

const obj = {
  101: "Amit",
  102: "Rahul",
  103: "Neha"
};
console.log(getValueByPath(obj, "102"));