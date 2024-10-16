
// Q. 40
// const sortMatrix = (matrix, n) => {
//     /*
//         5   4   7           1  2  3
//         1   3   8  ------>  4  5  6
//         2   9   6           7  8  9
//     */
//     let k = 0;
//     let temp = []
//     for(let r=0; r<n; r++){
//         for(let c=0; c<n; c++){
//             temp.push(matrix[r][c])
//         }
//     }
//     temp.reverse();

//     for(let r=0; r<n; r++){
//         for(let c=0; c<n; c++){
//             matrix[r][c] = temp[k++]
//         }
//     }

//     // Print Matrix formate
//     for(let r=0; r<n; r++){
//         let result = '';
//         for(let c=0; c<n; c++){
//             result +="  "+ matrix[r][c]
//         }
//         console.log(result)
//     }
// }

// const matrix = [ [ 5, 4, 7 ], [ 1, 3, 8 ], [ 2, 9, 6 ] ];
// const n = 3;
// sortMatrix(matrix, n)

// Q. 41 Rotate matrix by 90 degrees 
// const rotateMatrix = (matrix, n) => {
//     /*
//         1  2  3           7  4  1
//         4  5  6  ------>  8  5  2
//         7  8  9           9  6  3
//     */
//    let arr = [];
//     for(let r=0; r<n; r++){
//         let k = r;
//         let newArr = [];
//         for(let c=0; c<n; c++){
//             newArr.push(matrix[c][k])
//         }   
//         arr.push(newArr);
//         newArr = [];
//     }

//     let reverseArr = [];

//     for(let r=0; r<n; r++){
//         reverseArr.push(arr[r].reverse())
//     }

//     // Print Matrix Formate
//     for(let r=0; r<n; r++){
//         let result = ''
//         for(let c=0; c<n; c++){
//             result += "  "+reverseArr[r][c];
//         }
//         console.log(result);
//     }
// }

// const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const n = 3;
// rotateMatrix(matrix, n);


// Q. 44 Write a program for valid braickets
// function isValid(s) {
//     const stack = [];
//     const bracketPairs = {
//       ')': '(',
//       '}': '{',
//       ']': '[',
//     };
  
//     for (let i = 0; i < s.length; i++) {
//       const char = s[i];
//       if (char in bracketPairs) {
//         // If it's a closing bracket
//         const topElement = stack.pop(); // Use '#' as a placeholder for an empty stack
//         if (bracketPairs[char] !== topElement) {
//           return false;
//         }
//       } else {
//         // If it's an opening bracket, push it onto the stack
//         stack.push(char);
//       }
//     }
    
//     // If the stack is empty, it means all brackets were matched
//     return stack.length === 0;
//   }
  
//   // Example usage:
//   const input1 = "(("; // Valid
//   const input2 = "()[]{}"; // Valid
//   const input3 = "(]"; // Invalid
//   const input4 = "([)]"; // Invalid
//   const input5 = "{[]}"; // Valid
  
//   console.log(isValid(input1)); // true
//   console.log(isValid(input2)); // true
//   console.log(isValid(input3)); // false
//   console.log(isValid(input4)); // false
//   console.log(isValid(input5)); // true


function transposeMatrix(matrix) {
    // Get the number of rows and columns in the original matrix
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Create a new matrix to store the transposed version
    const transposed = [];
  
    // Initialize the transposed matrix with empty arrays for each column
    for (let i = 0; i < cols; i++) {
      transposed[i] = [];
    }
  
    // Loop through each element in the original matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Swap the element at (i, j) with the element at (j, i)
        transposed[j][i] = matrix[i][j];
      }
    }
  
    return transposed;
  }
  
  // Function to print the matrix in a readable format
  function printMatrix(matrix) {
    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log("Transposed Matrix:");
  printMatrix(transposedMatrix);
  





  function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length; // Number of rows in matrix A
    const colsA = matrixA[0].length; // Number of columns in matrix A
    const rowsB = matrixB.length; // Number of rows in matrix B
    const colsB = matrixB[0].length; // Number of columns in matrix B
  
    // Check if the number of columns in A is equal to the number of rows in B
    if (colsA !== rowsB) {
      console.log("Matrix multiplication is not possible due to dimension mismatch.");
      return null;
    }
  
    // Initialize the result matrix with zeros
    const result = [];
    for (let i = 0; i < rowsA; i++) {
      result[i] = [];
      for (let j = 0; j < colsB; j++) {
        result[i][j] = 0;
      }
    }
  
    // Multiply the matrices
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
  
    return result;
  }
  
  // Function to print the matrix in a readable format
  function printMatrix(matrix) {
    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
  
  // Example usage:
  const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    
  ];
  
  const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  
  const resultMatrix = multiplyMatrices(matrixA, matrixB);
  if (resultMatrix !== null) {
    console.log("Result of matrix multiplication:");
    printMatrix(resultMatrix);
  }

