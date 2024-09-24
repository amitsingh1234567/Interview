

// Q. 39
// const zeroMatrix = (matrix,n) => {
//     /*
    
//         4   1   3           4   1   0
//        [2  -4   0] ------> [0   0   0]
//         5   9   2           5   9   0
    
//     */
//         for(let r=0; r<n; r++){
//             for(let c=0; c<n; c++){
//                 if(matrix[r][c] === 0)
//                     matrix[r][c] = true
//             }
//         }
    
//         // find the location and zero
//         for(let r=0; r<n; r++){
//             for(let c=0; c<n; c++){
//                 if(matrix[r][c] === true){
//                     // Zero row
//                     for(let i=0; i<n; i++){
//                         matrix[r][i] = 0;
//                     }
//                     // Zero col
//                     for(let i=0; i<n; i++){
//                         matrix[i][c] = 0
//                     }
//                 }       
//             }
//         }

//         // Print Matrix formate
//         // for(let r=0; r<n; r++){
//         //     let result = '';
//         //     for(let c=0; c<n; c++){
//         //       result +="  "+ matrix[r][c]
//         //     }
//         //     console.log(result)
//         // }
//         return matrix;
// }
// const matrix = [[4,1,3], [2,-4,0], [5,9,2]];
// console.log(zeroMatrix(matrix, 3));

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


// function setZeroes(matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     const zeroRows = new Set(); // To store the rows that need to be zeroed
//     const zeroCols = new Set(); // To store the columns that need to be zeroed
  
//     // Step 1: Identify all rows and columns that contain a zero
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         if (matrix[i][j] === 0) {
//           zeroRows.add(i); // Add the row index to the set
//           zeroCols.add(j); // Add the column index to the set
//         }
//       }
//     }
  
//     // Step 2: Set the identified rows to zero
//     for (const row of zeroRows) {
//       for (let j = 0; j < cols; j++) {
//         matrix[row][j] = 0;
//       }
//     }
  
//     // Step 3: Set the identified columns to zero
//     for (const col of zeroCols) {
//       for (let i = 0; i < rows; i++) {
//         matrix[i][col] = 0;
//       }
//     }
//   }
  
//   // Function to print the 2D array in a readable format
//   function printMatrix(matrix) {
//     matrix.forEach(row => console.log(row.join(" ")));
//   }
  
//   // Example usage:
//   const matrix = [
//     [7, 2, 3],
//     [4, 0, 1],
//     [7, 5, 9],
//   ];
  
//   console.log("Original Matrix:");
//   printMatrix(matrix);
  
//   setZeroes(matrix);
  
//   console.log("\nMatrix After Setting Zeroes:");
//   printMatrix(matrix);





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
  







//   function thirdNonRepeatingChar(str) {
//     const charCount = {};

//     // Step 1: Count the frequency of each character in the string
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Step 2: Collect all non-repeating characters
//     const nonRepeatingChars = [];
//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             nonRepeatingChars.push(str[i]);
//         }
//     }

//     console.log(nonRepeatingChars)
//     // Step 3: Return the third non-repeating character, or null if not found
//     return nonRepeatingChars.length >= 3 ? nonRepeatingChars[2] : null;
// }

// // Example usage:
// const input = "swisshello";
// const result = thirdNonRepeatingChar(input);
// console.log(result); // Output: "h"




// function secondNonRepeatingChar(str) {
//     const charCount = {};

//     // Step 1: Count the frequency of each character in the string
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Step 2: Collect all non-repeating characters
//     const nonRepeatingChars = [];
//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             nonRepeatingChars.push(str[i]);
//         }
//     }

//     console.log(charCount)

//     // Step 3: Return the second non-repeating character, or null if not found
//     return nonRepeatingChars.length >= 2 ? nonRepeatingChars[1] : null;
// }

// // Example usage:
// const input = "szwiss";
// const result = secondNonRepeatingChar(input);
// console.log(result); // Output: "s"







function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals based on the starting time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Create an array to hold merged intervals
  const merged = [intervals[0]];

  // Step 3: Iterate through the intervals
  for (let i = 1; i < intervals.length; i++) {
      let lastMergedInterval = merged[merged.length - 1];
      let currentInterval = intervals[i];

      // If the current interval overlaps with the last merged one, merge them
      if (currentInterval[0] <= lastMergedInterval[1]) {
          lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
          // Otherwise, add the current interval to the merged array
          merged.push(currentInterval);
      }
  }

  return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]

