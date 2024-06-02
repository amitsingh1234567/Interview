function main(){
    const arr = [5,6,1,3,8,2];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            console.log('i :>> ', i);
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            i = -1;
        }
    };
    return arr;
}

const result = main();
console.log('result :>> ', result);