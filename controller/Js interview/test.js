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
const target = 25;

const result = twoSum(arr, target);
console.log(result);
