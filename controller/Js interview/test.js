function thirdLargest(arr) {
    if(arr.length < 3)
    return "Array must have three numbers";

    arr = [...new Set(arr)];
    
    var first  = -Infinity;
    var second = -Infinity;
    var third  = -Infinity;

    for(let num of arr){
        if(first <= num){
            third  = second;
            second = first;
            first  = num;
        }else if(second <= num){
            third = second;
            second = num;
        }else if(third <= num){
            third = num;
        }
    }
    
    return {first, second, third};
};

console.log(thirdLargest([10, 20, 4, 45, 99, 99])); 
