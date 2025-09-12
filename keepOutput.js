/*
Top 50 Q by chatGpt
https://chatgpt.com/share/68b3fc34-9550-8013-ad8a-12ee1ed0eed0

Top NodeJs IV Q by chatGpt
https://chatgpt.com/share/68be3081-70e0-8013-90b5-f173d77c44f4

Top 10 Javascript Algorithms to Prepare for Coding Interviews
https://www.youtube.com/watch?v=ufBbWIyKY2E

Resursion Explaination
https://chatgpt.com/share/68bc40ea-e580-8011-a4d3-83184c655efa

What is the difference between a shallow copy and a deep copy
*/

/*
LEVEL => 0
Q.1  Deep clone an object (Top). 1D, 2D
Q.2  Compare two objects for equality (Top). 1D, 2D
Q.3  Group objects by a property (Top) 1D, 2D
Q.4  Merge two objects deeply.(Top) 1D, 2D
Q.5  Convert nested object to flat object.(Top) 1D, 2D
Q.6  Find keys with maximum value in an object. 1D, 2D
Q.7  Implement array chunking (split array into smaller arrays) 1D, 2D
Q.8  Find the longest substring without repeating characters. (Not needed)
Q.9  Find the missing number in a sequence 1D, 2D
Q.10 Rotate an array k times. 1D, 2D
Q.11 Find the intersection of two arrays. 1D, 2D
Q.12 Move all zeros to the end of an array . 1D, 2D
Q.13 Find the second largest element in an array (Top). 1D, 2D
Q.14 Find duplicate numbers in an array. 1D, 2D
Q.15 Flatten a nested array without using flat(). 1D, 2D
Q.16 Reverse a string without using built-in reverse(). 1D, 2D
Q.17 Check if a string is a palindrome. 1D, 2D
Q.18 Find the first non-repeating character in a string. 1D, 2D
Q.20 Count the occurrences of each character in a string. 1D, 2D
Q.21 Reverse words in a sentence. 1D, 2D
Q.22 Check if two strings are anagrams. 1D, 2D
Q.23 Find the longest common prefix in an array of strings. (pending)
Q.24 Remove duplicate characters from a string. 1D, 2D
Q.25 Find all pairs in an array that sum to a target. 1D, 2D
Q.26 Reverse digits of a number. 1D, 2D
Q.27 -----------------------------------
Q.28 Count frequency of elements using object/Map. 1D, 2D
Q.29 Implement memoization function. (pending)
Q.30 -----------------------------------
Q.31 Display this desired output { abc: 3, ccr: 2, jtv: 1 }
    from this given Array ['abc','bac','bac','ccr','rcc','vtj'] 1D, 2D

Q.32 Find Common key value in to this two object
    const input1 = {a:15, b:5, c:8, d:10, e:15}
    const input2 = {a:5, e:15, f:10, d:10}; 1D, 2D

Q.32 Captilized first letter of word 1D, 2D
Q.33 Remove duplicate from array 1D, 2D
Q.34 Remove duplicate from array of object 1D, 2D
Q.35 Array shorting 1D, 2D
Q.36 Array of object shorting 1D, 2D
Q.37 find the position of first and final occurrence of an element in an array element is 5 1D, 2D
Q.38 Remove all the zero at the end 1D, 2D
Q.39 --------------------------------
Q.40 Write a program to find Third Largest number (Top) 1D, 2D
Q.41 Write a program of Two Sum 1D, 2D
Q.42 --------------------------------
Q.43 Write a function that returns the deepest key-value pair in a nested object 1D, 2D
Q.44 Write a program for setZero Matrix (pending)
Q.45 -----------------------------------------
Q.46 Write a program to check valid brackets 1D, 2D
Q.47 Find the Longest Key in an Object 1D, 2D
Q.48 Find index of Captial letter to given Array 1D, 2D
Q.49 if i have five words how do i convert first second and four word as captial letter 1D, 2D
Q.50 Reverse string word wise 1D, 2D
Q.51 Display only non repeaing value of the given Array 1D, 2D
Q.52 Replace a specific letter from the different symbol of the given string 1D, 2D
Q.52 Write a program to print Captial A-Z using loop 1D, 2D
Q.53 Write a program to print Captial a-z using loop 1D, 2D
Q.54 Write a program of FizzBuzz (pending)
Q.55 --------------------------------
Q.56 Find Second Non Repeating Character 1D, 2D
Q.57 How to make object immutable 1D, 2D
Q.58 Group deeply objects by a property 
Q.59 How to remove space and any explemenatry fro a string
Q.60 How to remove only special characters from a string 

*/

/*
LEVEL => 1
Q.1 Print this pattern
######
 *****
  ####
   ***
    ##
     *

function printPattern(n) {
    for (let i = n; i > 0; i--) {
        let row = "";

        // print spaces
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }

        // alternate symbols: even row → #, odd row → *
        let symbol = (i % 2 === 0) ? "#" : "*";

        // print symbols
        for (let j = 0; j < i; j++) {
            row += symbol;
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.2 Prints a square
******
*    *
*    *
*    *
*    *
******
function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        // inner loop to handle columns
        for (let j = 0; j < n; j++) {
            // star will print only when it is in first row,
            // last row, first column, or last column
            if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.3 Prints a right-angled triangle with numbers in increasing row order, aligned to the right
     1 
    2 2 
   3 3 3
  4 4 4 4
 5 5 5 5 5
6 6 6 6 6 6

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // print numbers with space
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.4 Prints a pyramid where each row contains numbers from 1 to the row number.
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        // inner loop to handle columns
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.5 Print reverse pyramid
1 2 3 4 5 6 
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

function printPattern(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";

        // inner loop to handle columns
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.6 Prints a pyramid where numbers increase continuously from top to bottom.
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
16 17 18 19 20 21 

function printPattern(n) {
    let num = 1;

    // outer loop to handle rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // inner loop to handle columns
        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num++; // increase number
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.7 Print Zero-One Triangle Pattern
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 
0 1 0 1 0 1 

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // inner loop to handle columns
        for (let j = 1; j <= i; j++) {
            // if (i + j) is even → 1, else → 0
            row += ((i + j) % 2 === 0 ? "1 " : "0 ");
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.8 Palindrome Triangle Pattern
          1 
        2 1 2 
      3 2 1 2 3 
    4 3 2 1 2 3 4 
  5 4 3 2 1 2 3 4 5 
6 5 4 3 2 1 2 3 4 5 6 

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces
        for (let j = 1; j <= 2 * (n - i); j++) {
            row += " ";
        }

        // print descending numbers
        for (let j = i; j >= 1; j--) {
            row += j + " ";
        }

        // print ascending numbers (start from 2 to avoid duplicate "1")
        for (let j = 2; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.9 Rhombus Pattern
     ******
    ******
   ******
  ******
 ******
******

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // print stars
        for (let j = 1; j <= n; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.10 Diamond Star Pattern
     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *  

function printPattern(n) {
    // upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // stars
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
        }

        console.log(row);
    }

    // lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // stars
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.11 Butterfly Star Pattern
*          *
**        **
***      ***
****    ****
*****  *****
************
************
*****  *****
****    ****
***      ***
**        **
*          *

function printPattern(n) {
    // upper part
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= 2 * n; j++) {
            // spaces in the middle
            if (j > i && j <= 2 * n - i) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row);
    }

    // lower part
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= 2 * n; j++) {
            // spaces in the middle
            if (j > i && j <= 2 * n - i) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.12 Square Fill Pattern
******
******
******
******
******
******

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 0; i < n; i++) {
        let row = "";

        // inner loop to handle columns
        for (let j = 0; j < n; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.13 Right Half Pyramid Pattern
*
**
***
****
*****
******

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // inner loop to handle columns
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.14 Reverse Right Half Pyramid Pattern
******
*****
****
***
**
*

function printPattern(n) {
    // outer loop to handle rows
    for (let i = n; i >= 1; i--) {
        let row = "";

        // inner loop to handle columns
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.15 Left Half Pyramid Pattern
     *
    **
   ***
  ****
 *****
******

function printPattern(n) {
    // outer loop to handle rows
    for (let i = n; i >= 1; i--) {
        let row = "";

        // print spaces
        for (let j = 1; j < i; j++) {
            row += " ";
        }

        // print stars
        for (let j = 0; j <= n - i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.16 Reverse Left Half Pyramid Pattern
******
 *****
  ****
   ***
    **
     *

function printPattern(n) {
    // outer loop to handle rows
    for (let i = n; i > 0; i--) {
        let row = "";

        // print spaces
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }

        // print stars
        for (let j = 0; j < i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.17 Triangle Star Pattern
     * 
    * * 
   * * * 
  * * * * 
 * * * * * 
* * * * * * 

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 0; i < n; i++) {
        let row = "";

        // print spaces
        for (let j = n - i; j > 1; j--) {
            row += " ";
        }

        // print stars
        for (let j = 0; j <= i; j++) {
            row += "* ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.18 Reverse Number Triangle Pattern
1 2 3 4 5 6 
 2 3 4 5 6 
  3 4 5 6 
   4 5 6 
    5 6 
     6 

function printPattern(n) {
    // outer loop to handle rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // inner loop to print spaces
        for (let j = 1; j < i; j++) {
            row += " ";
        }

        // inner loop to print numbers
        for (let j = i; j <= n; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.19 Mirror Image Triangle Pattern
1 2 3 4 5 6 
 2 3 4 5 6 
  3 4 5 6 
   4 5 6 
    5 6 
     6 
    5 6 
   4 5 6 
  3 4 5 6 
 2 3 4 5 6 
1 2 3 4 5 6 

function printPattern(n) {
    // Printing the upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces
        for (let j = 1; j < i; j++) {
            row += " ";
        }

        // print numbers
        for (let j = i; j <= n; j++) {
            row += j + " ";
        }

        console.log(row);
    }

    // Printing the lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // print spaces
        for (let j = 1; j < i; j++) {
            row += " ";
        }

        // print numbers
        for (let j = i; j <= n; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.20 Hollow Triangle Pattern
     *
    * *
   *   *
  *     *
 *       *
***********

function printPattern(n) {
    // outer loop for rows
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print leading spaces
        for (let j = i; j < n; j++) {
            row += " ";
        }

        // print stars and inner spaces
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || i === n || k === (2 * i - 1)) {
                row += "*";
            } else {
                row += " ";
            }
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.21 Hollow Reverse Triangle Pattern
***********
 *       *
  *     *
   *   *
    * *
     *

function printPattern(n) {
    // outer loop for rows
    for (let i = n; i >= 1; i--) {
        let row = "";

        // print leading spaces
        for (let j = i; j < n; j++) {
            row += " ";
        }

        // print stars and spaces
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || i === n || k === (2 * i - 1)) {
                row += "*";
            } else {
                row += " ";
            }
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);
------------------------------------------------------------------------>
Q.22 Hollow Diamond Pyramid
     *
    * *
   *   *
  *     *
 *       *
*         *
 *       *
  *     *
   *   *
    * *
     *
     
function printPattern(n) {
    // upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // print stars with spaces inside
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }

        console.log(row);
    }

    // lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // print spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // print stars with spaces inside
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);

------------------------------------------------------------------------>
Q.23 Hollow Hourglass Pattern
* * * * * * 
 *       * 
  *     * 
   *   * 
    * * 
     * 
    * * 
   *   * 
  *     * 
 *       * 
* * * * * * 

function printPattern(n) {
    // upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces
        for (let j = 1; j < i; j++) {
            row += " ";
        }

        // print stars and spaces
        for (let j = i; j <= n; j++) {
            if (j === i || j === n || i === 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }

    // lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // print spaces
        for (let j = 1; j < i; j++) {
            row += " ";
        }

        // print stars and spaces
        for (let j = i; j <= n; j++) {
            if (j === i || j === n || i === 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);
------------------------------------------------------------------------>
Q.24 Pascal's Triangle
    1 
   1 1 
  1 2 1 
 1 3 3 1 

function printPascal(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        // print spaces for left alignment
        for (let j = 0; j <= n - i; j++) {
            row += " ";
        }

        // first value in each line is always 1
        let x = 1;
        for (let k = 1; k <= i; k++) {
            row += x + " ";
            x = (x * (i - k)) / k;
        }

        console.log(row);
    }
}

// Driver code
let n = 4;
printPascal(n);

------------------------------------------------------------------------>
Q.25 Right Pascal’s Triangle
* 
* * 
* * * 
* * * * 
* * * 
* * 
* 

function printPattern(n) {
    // upper part
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }

    // lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// Driver code
let n = 4;
printPattern(n);

------------------------------------------------------------------------>
Q.26 K Pattern
******
*****
****
***
**
*
**
***
****
*****
******

function printPattern(n) {
    // upper part
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }

    // lower part
    for (let i = 2; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// Driver code
let n = 6;
printPattern(n);


*/