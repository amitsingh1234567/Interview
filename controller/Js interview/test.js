const zeroMatrix = (matrix,n) => {
    /*
    
        4   1   3           4   1   0
       [2  -4   0] ------> [0   0   0]
        5   9   2           5   9   0
    
    */
        for(let r=0; r<n; r++){
            for(let c=0; c<n; c++){
                if(matrix[r][c] === 0)
                    matrix[r][c] = true
            }
        }
    
        // find the location and zero
        for(let r=0; r<n; r++){
            for(let c=0; c<n; c++){
                if(matrix[r][c] === true){
                    // Zero row
                    for(let i=0; i<n; i++){
                        matrix[r][i] = 0;
                    }
                    // Zero col
                    for(let i=0; i<n; i++){
                        matrix[i][c] = 0
                    }
                }       
            }
        }

        // Print Matrix formate
        // for(let r=0; r<n; r++){
        //     let result = '';
        //     for(let c=0; c<n; c++){
        //       result +="  "+ matrix[r][c]
        //     }
        //     console.log(result)
        // }
        return matrix;
}
const matrix = [[4,1,3], [2,-4,0], [5,9,2]];
console.log(zeroMatrix(matrix, 3));






const greet = () => {

}

// console.log(greet());



