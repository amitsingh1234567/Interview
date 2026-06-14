/*
=================> TOP 50 ARRAY BASED Q <================

=================> Easy Problems <================

=================> Medium Problems <================
Q.1 Two Sum Problem: Use a Map or Set to store complements in O(n) time.
Q.2 Rotate Array by K Steps: Use slice operations or reverse sub-segments.
Q.3 Maximum Subarray Sum (Kadane's Algorithm): Keep a running local max and global max
Q.4 Find All Pairs with a Given Sum: Use a hash table to find matching pairs.
Q.5 Intersection of Two Arrays: Filter elements present in both sets arr1.filter(x => set2.has(x)).
Q.6 Union of Two Arrays: Merge arrays and pass them through new Set()
Q.7 Find the Majority Element (> N/2 times): Use Boyer-Moore Voting Algorithm

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