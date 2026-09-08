/*
=================> TOP 50 ARRAY BASED Q <================

=================> Easy Problems <================

=================> Medium Problems <================
Q.1 Two Sum Problem: Use a Map or Set to store complements in O(n) time.
Q.2 Rotate Array by K Steps: Use slice operations or reverse sub-segments.
Q.3 Maximum Subarray Sum (Kadane's Algorithm): Keep a running local max and global max.
Q.4 Find All Pairs with a Given Sum: Use a hash table to find matching pairs.
Q.5 Intersection of Two Arrays: Filter elements present in both sets arr1.filter(x => set2.has(x)).
Q.6 Union of Two Arrays: Merge arrays and pass them through new Set().
Q.7 Find the Majority Element (> N/2 times): Use Boyer-Moore Voting Algorithm.
Q.8 Write a program for permutation for "abc" => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ].#
Q.9 Write a program for permutation for [1,2,3] => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].#
Q.10 Maximum difference between two element



======================> CUSTOM AS PER THE INTERVIEW STANDARD <===========================
Q.1 Move all zero to the the using two pointer approach
Q.2 Reverse array from index
Q.3 Rotate array by specific position
Q.4 Array shorting
Q.5 Array of object shorting
Q.6 Remove duplicates
*/

// =========> Must-Prepare Questions (Highest Interview Frequency) <=========== 
/*
First Non-Repeating Character
Word Frequency Count
Group Anagrams
Valid Anagram
Longest Substring Without Repeating Characters
Contains Duplicate
Longest Consecutive Sequence
Subarray Sum Equals K
Longest Subarray with Sum K
Remove Duplicate Objects
LRU Cache

Q.2 Median of Two Sorted Arrays 
Q.3 Container With Most Water 
Q.4 Longest Common Prefix 
Q.5 3Sum
Q.6 3Sum Closest 
Q.7 4Sum
Q.8 Remove Duplicates from Sorted Array 
Q.9 Remove Element 
Q.10 Next Permutation 
Q.11 Search in Rotated Sorted Array 
Q.12 Find First and Last Position of Element in Sorted Array
Q.13 Search Insert Position Q.14 Valid Sudoku

*/




// =================> Medium Problems <================

// Q.1 Two Sum Problem: Use a Map or Set to store complements in O(n) time.
/*
function twoSum(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
};

nums = [2, 7, 11, 15];
target = 9;

console.log(twoSum(nums, target))

*/

// Q.2 Rotate Array by K Steps: Use slice operations or reverse sub-segments.
/*
Approach => 1
-------------
function rotate(nums, k) {
    const n = nums.length;

    k = k % n;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);

    return nums;
}

function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
};


nums = [1, 2, 3, 4, 5, 6, 7]
k = 3;
console.log(rotate(nums, k))

Approach => 2
-------------
function rotate(nums, k) {
    const n = nums.length;

    k = k % n;

    const rotated = [
        ...nums.slice(n - k),
        ...nums.slice(0, n - k)
    ];

    return rotated;
}

nums = [1, 2, 3, 4, 5, 6, 7]
k = 3;
console.log(rotate(nums, k))

*/

// Q.3 Maximum Subarray Sum (Kadane's Algorithm): Keep a running local max and global max
/*
function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

nums = [2, 3, -8, 7, -1, 2, 3]
console.log(maxSubArray(nums))

*/

// Q.4 Find All Pairs with a Given Sum: Use a hash table to find matching pairs
/*
function findPairs(nums, target) {
    const map = new Map();
    const result = [];

    for(const num of nums) {
        const complement = target - num;

        if(map.has(complement)) {
            result.push([complement, num]);
        }

        map.set(num, (map.get(num) || 0) + 1);
    }

    return result;
}

const nums = [1, 5, 7, -1, 5]
const target = 6

console.log(findPairs(nums, target));

*/

// Q.5 Intersection of Two Arrays: Filter elements present in both sets arr1.filter(x => set2.has(x)).
/*
function intersection(arr1, arr2) {
    const set2 = new Set(arr2);

    return [...new Set(
        arr1.filter(num => set2.has(num))
    )];
}

arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

console.log(intersection(arr1, arr2));

*/

// Q.6 Union of Two Arrays: Merge arrays and pass them through new Set()
/*
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
};

const arr1 = [1, 2, 2, 3];
const arr2 = [2, 3, 4, 4];

console.log(union(arr1, arr2))

*/

// Q.7 Find the Majority Element (> N/2 times): Use Boyer-Moore Voting Algorithm
/*
function majorityElement(nums) {

    const map = new Map();

    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);

        if(map.get(num) > nums.length / 2) {
            return num;
        }
    }
}

const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));

*/

// Q.8 Write a program for permutation for "abc"
/*
function premute(str){
  if(str.length <= 1) return [str];

  const result = [];

  for(let i = 0; i < str.length; i++){
    const char = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);

    for(let per of premute(rest)){
      result.push(char + per);
    }
  }
  return result;
}

const str = "abc";
console.log(premute(str));

*/

// Q.9 Write a program for permutation for [1,2,3]
/* 
function premute(str){
  if(str.length <= 1) return [str];

  const result = [];

  for(let i = 0; i < str.length; i++){
    const char = str[i];
    const rest = str.slice(0, i).concat(str.slice(i + 1));

    for(let per of premute(rest)){
      result.push([char,  ...per]);
    }
  }
  return result;
}

const str = [1, 2, 3];
console.log(premute(str));

*/

// Q.10 Maximum difference between two element
/*
function maxDifference(nums) {
    let maxDiff = -1;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] > nums[i]) {
                maxDiff = Math.max(maxDiff, nums[j] - nums[i])
            }
        }
    };

    return maxDiff;
};


const arr = [2,3,10, 6,4,8,1];

console.log(maxDifference(arr));

*/


// ======================> CUSTOM AS PER THE INTERVIEW STANDARD <===========================
// Q.1 Move all zero to the the using two pointer approach
/*
function moveZeroes(nums) {
  if (!nums || nums.length <= 1) return nums;

  let writePointer = 0;

  // Step 1: Overwrite zeroes with non-zero elements
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

//   console.log(nums)

  // Step 2: Fill remaining positions with zeroes
  while (writePointer < nums.length) {
    nums[writePointer] = 0;
    writePointer++;
  }

  return nums;
}

// Example Usage:
const input = [0, 1, 0, 3, 12];
console.log(moveZeroes(input)); // Output: [1, 3, 12, 0, 0]

*/

// Q.2 Reverse array from index
/*
function reverseFromIndex(nums, k) {
  let start = k 
  let end = nums.length - 1;

  while (start < end) {
    // [nums[start], nums[end]] = [nums[end], nums[start]];
    // start++;
    // end--;
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }

  return nums;
}

// Example Usage:
const arr2 = [10, 20, 30, 4, 50];
console.log(reverseFromIndex(arr2, 2)); 
*/

// Q.3 Rotate array by specific position
/*
function rotateArrayInPlace(nums, k) {
  k = k % nums.length;

  function reverse(start, end) {
    while (start < end) {
    //   [nums[start], nums[end]] = [nums[end], nums[start]];
    //   start++;
    //   end--;
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
  }

  // Reverse first part
  reverse(0, k - 1);
  // Reverse second part
  reverse(k, nums.length - 1);
  // Reverse whole array
  reverse(0, nums.length - 1);

  return nums;
}

// Example Usage:
const arr2 = [10, 20, 30, 40, 50];
console.log(rotateArrayInPlace(arr2, 2));


Inbuild Method
--------------
function rotateArray(nums, k) {
  if (!nums || nums.length === 0) return nums;

  // Normalize k in case it's larger than array length
  k = k % nums.length;

  // Slice and concatenate
  return nums.slice(k).concat(nums.slice(0, k));
}

// Example Usage:
const arr = [10, 20, 30, 40, 50];
console.log(rotateArray(arr, 2)); 
// Output: [30, 40, 50, 10, 20]

*/

// Array shorting
/*
function sortArray(nums) {
  if (!nums || nums.length <= 1) return nums;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
}

const arr = [50, 20, 40, 10, 30];
console.log(sortArray(arr));

*/

// Array of object shorting
/*
function sortObjects(arr, key) {
  if (!arr || arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][key] > arr[j + 1][key]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const people = [
  { name: "Amit", age: 30 },
  { name: "Ravi", age: 25 },
  { name: "Neha", age: 28 },
  { name: "Kiran", age: 35 }
];

console.log(sortObjects(people, "name"));

*/

// Remove duplicates
/*
function findDuplicates(nums) {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && !duplicates.includes(nums[i])) {
        duplicates.push(nums[i]);
      }
    }
  }

  return duplicates;
}

// Example Usage:
const arr = [10, 20, 30, 20, 40, 10, 50, 30];
console.log(findDuplicates(arr));


*/