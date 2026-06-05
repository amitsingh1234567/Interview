/*
Array Based Questions:-
Q.1 Two Sum *
Q.2 Reverse Integer
Q.3 Find the contiguous subarray (containing at least one number) which has the largest sum.
Q.4 Write a program for permutation for "abc" => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
Q.5 Write a program for permutation for [1,2,3] => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Q.6 Remove Duplicates from Sorted Array *
Q.7 Search Insert Position *
Q.8 Find the N position in the Array *
Q.9 Find First and Last Position of Element in Sorted Array *
Q.10 Find first largest, second largest, third largest

*/



// Q.1 Two Sum
/*
function twoSum(arr, target){
    const numToIndexMap = {};

    for(let i = 0; i < arr.length; i++){
        const complement = target - arr[i];
        
        if(numToIndexMap.hasOwnProperty(complement)){
            return [numToIndexMap[complement], i];
        };

        numToIndexMap[arr[i]] = i;
    }
    
    return [];
    
};

const arr = [1,2,5,9,20];
console.log(twoSum(arr, 10));

*/

// Q.2 Reverse Integer

// Q.3 Find the contiguous subarray (containing at least one number) which has the largest sum.
/*
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
*/

// Q.4 Write a program for permutation for "abc"
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

// Q.5 Write a program for permutation for [1,2,3]
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


// Q.6 Remove Duplicates from Sorted Array
/*
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
console.log(nums);
*/

// Q.7 Search Insert Position
/*
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1
}

const nums = [1, 3, 5, 6, 9, 8, 20, 30, 50] 
const target = 21;

console.log(searchInsert(nums, target));


*/

// Q.8 Find the N position in the Array
/*
function findNPositions(nums, target, n) {
    const positions = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            positions.push(i);
        }
        
        if (positions.length === n) {
            break;
        }
    }

    while (positions.length < n) {
        positions.push(-1);
    }

    return positions;
}

const nums = [10, 8, 5, 8, 7, 8, 2, 8];
const target = 8;

console.log(findNPositions(nums, target, 5));

 */

// Q.9 Find First and Last Position of Element in Sorted Array
/*
var searchRangeUnsorted = function(nums, target) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }

    return [first, last];
};

const nums = [5, 7, 7, 8, 8, 7, 10]
const target = 7;
console.log(searchRangeUnsorted(nums, target));

*/

// Q.10 Find first largest, second largest, third largest
/*
function findLargestAndSecondLargest(arr) {
  if (arr.length < 3) {
    return "Array should have at least 3 elements";
  }

  let first = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity; 

  for (let num of arr) {
    // 1. Update all three when a new first is found
    if (num > first) {
      thirdLargest = secondLargest;
      secondLargest = first;
      first = num;
    }
    // 2. Update second and third when a new second first is found
    else if (num > secondLargest && num !== first) {
      thirdLargest = secondLargest;
      secondLargest = num;
    }
    // 3. Update third first while ensuring no duplicates from higher ranks
    else if (num > thirdLargest && num !== secondLargest && num !== first) {
      thirdLargest = num;
    }
  }

  return {
    first: first === -Infinity ? null : first,
    secondLargest: secondLargest === -Infinity ? null : secondLargest,
    thirdLargest: thirdLargest === -Infinity ? null : thirdLargest
  };
}

console.log(findLargestAndSecondLargest([10, 20, 4, 45, 99, 99])); 




*/