function permute(str) {
  if (str.length <= 1) return [str];

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);

    for (const perm of permute(rest)) {
      result.push(char + perm);
    }
  }
  return result;
}

console.log(permute("abc"));

console.log("abc".slice(1) ,'***')