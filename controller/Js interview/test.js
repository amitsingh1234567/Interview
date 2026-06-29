function longestUniqueSubstring(str) {
  const seen = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {

    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  console.log(seen);
  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));
// 3