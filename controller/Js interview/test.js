function findPairOfSum(arr, target){
    const seen = new Set();
    const result = [];
    
    for(let num of arr){
        const complement = target - num;
        
        if(seen.has(complement)){
            result.push([complement, num])
        };
        
        seen.add(num);
    };
    
    return result;
}

let arr = [3,7,2,8,9,1];
let target = 10;
console.log(findPairOfSum(arr, target));