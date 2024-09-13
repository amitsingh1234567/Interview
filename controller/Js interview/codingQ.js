// Q. 19 
// function twoSum(nums, target) {
//     const numToIndexMap = {}; // Create a map to store numbers and their indices
  
//     for (let i = 0; i < nums.length; i++) {
//       console.log('numToIndexMap :>> ', numToIndexMap);
//       const complement = target - nums[i];
//       console.log('complement :>> ', complement);
  
//       // Check if the complement exists in the map
//       if (numToIndexMap.hasOwnProperty(complement)) {
//         // Return the indices of the two numbers that add up to the target
//         return [numToIndexMap[complement], i];
//       }
//       // Store the current number and its index in the map
//       numToIndexMap[nums[i]] = i;
//     }
  
//     // If no solution is found, return an empty array or handle the error as needed
//     return [];
//   }
  
//   // Example usage:
//   const nums = [2, 7, 11, 15];
//   const target = 22;
//   const result = twoSum(nums, target);
//   console.log(result); 


// Q. 22 Find the first missing odd number
// const missingOddNum = () => {
//     let arr = [5, 7, 9, 11, 15, 17, 20];
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     for(let i = min; i<max; i++){
//         if(i % 2 == 1){
//             if(!arr.includes(i)){
//                 console.log(i)
//                 return
//             }
//         }
//     }
// }
// missingOddNum()


// Q. 23 Swaip number without third variable
// const swaipNum = () => {
//     let a = 5;
//     let b = 10;
    
//     console.log("Before swapping: a =", a, "b =", b);
    
//     a = a + b; 
//     b = a - b; 
//     a = a - b; 
    
//     console.log("After swapping: a =", a, "b =", b);

// }
// swaipNum()


// Q. 28 Print factorial number
// const getFactorialNum = () => {
//     const input = 5;
//     let fact = 1;
//     if(input < 0)
//     return console.log(`Factorial of ${input} is not possible`)
    
//     for(let i=1; i<=input; i++){
//         fact = i * fact;
//     }
//     console.log('fact :>> ', fact);
// }
// getFactorialNum()

// Q. 38 Randomise array element Or suffle the array
// const shuffleArray = () => {
//     const myArray = [1, 2, 3, 4, 5];
//     for(let i = myArray.length - 1 ; i > 0; i--){
//       let random = Math.floor(Math.random()*myArray[i]);

//       let temp = myArray[i];
//       myArray[i] = myArray[random];
//       myArray[random] = temp;
//     }   
//     console.log('myArray :>> ', myArray);
// }

// shuffleArray()

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

// Q. 42 Check given string is Anagram or Not
// const isAnagram = () => {
//     let firstWord = 'Mary';
//     let secondWore = 'rmAy';

//     firstWord =  firstWord.toLocaleLowerCase().split("").sort().join("")
//     secondWore = secondWore.toLocaleLowerCase().split("").sort().join("")

//     if(firstWord == secondWore){
//         console.log('Anagaram')
//     }else{
//         console.log('Not Anagoram')
//     }
// }

// isAnagram()



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


// Q. 46 Write a program of fizzBuzz to 100 number
// function fizzBuzz(limit) {
//     for (let i = 1; i <= limit; i++) {
//       // Check for multiples of both 3 and 5 first
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } 
//       // Check for multiples of 3
//       else if (i % 3 === 0) {
//         console.log("Fizz");
//       }
//       // Check for multiples of 5
//       else if (i % 5 === 0) {
//         console.log("Buzz");
//       } 
//       // If not a multiple of 3 or 5, print the number
//       else {
//         console.log(i);
//       }
//     }
//   }
  
//   // Call the fizzBuzz function with a limit of 100
//   fizzBuzz(100);




// Q. 58
// function printTrangle(rows){
//     for(let i= 1; i<=rows; i++){
//         let row = '';
        
//         for(let j = 1; j<=rows - i; j++){
//             row += ' ';
//         }

//         for(let k = 1; k <= i * 2 - 1; k++){
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// const k = 5;
// printTrangle(k)

// Q. 59
// function printNumberTrangle(rows) {
//     for(let i = 1; i <= rows; i++){
//         let row = '';

//     for(let j = 1; j <= rows - i; j++){
//         row += ' ';
//     } 
    
//     // Add descending order
//     for(let k = i; k >= 1; k--){
//         row += k;
//     }

//     // Add ascending number
//     for(let l = 2; l <= i; l++){
//         row += l;
//     }
//     console.log(row);
// }
// }

// const k = 5;
// printNumberTrangle(k);


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
  