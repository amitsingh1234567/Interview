const rotateMatrix = (matrix, n) => {
    /*
        1  2  3           7  4  1
        4  5  6  ------>  8  5  2
        7  8  9           9  6  3
    */
   let arr = [];
    for(let r=0; r<n; r++){
        let k = r;
        let newArr = [];
        for(let c=0; c<n; c++){
            newArr.push(matrix[c][k])
        }   
        arr.push(newArr);
        newArr = [];
    }

    let reverseArr = [];

    for(let r=0; r<n; r++){
        reverseArr.push(arr[r].reverse())
    }

    // Print Matrix Formate
    for(let r=0; r<n; r++){
        let result = ''
        for(let c=0; c<n; c++){
            result += "  "+reverseArr[r][c];
        }
        console.log(result);
    }
}

  
const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const n = 3;
rotateMatrix(matrix, n)


const greet = () => {

}

// console.log(greet());



