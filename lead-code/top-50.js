/*
Q.1 Two Sum => 1D
Q.2 Reverse Integer
Q.3 Find the contiguous subarray (containing at least one number) which has the largest sum.

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


