/*765
Eagle Drift:
Email:- amit.kumar@eagledrift.com
PWD:- Y!592122892139up
HreatHR PWD:- Yb!58$12289#@39up

Impetus Password:- QcGY6qLe_qu#TuC
QcGY6qLe_qu#TuC

Common.JS and PolyFill
Mphasis password:- rS7gE$2X9Kx*T8q
RSA Algorithm
FromGroup 
Accenture password *EQ9BsJVVs%H8pd
stand stand alone
Top 50 Q by chatGpt
https://chatgpt.com/share/68b3fc34-9550-8013-ad8a-12ee1ed0eed0

Top NodeJs IV Q by chatGpt
https://chatgpt.com/share/68be3081-70e0-8013-90b5-f173D77c44f4

Top 10 Javascript Algorithms to Prepare for Coding Interviews
https://www.youtube.com/watch?v=ufBbWIyKY2E

Resursion Explaination
https://chatgpt.com/share/68bc40ea-e580-8011-a4d3-83184c655efa

Error handling 
https://chatgpt.com/share/68cb6d82-be58-8013-94a7-b0a1ae76d018
https://chatgpt.com/share/68cb6fb3-2cac-8011-a18e-d87bd18ab92b
uncaughtException
unhandledRejection

Winston
https://chatgpt.com/share/683bc422-3264-8013-a7c5-6fd82301ba1c

What is the difference between a shallow copy and a deep copy

*******************************************************************************
NodeJs :- 
1. Synchronous Errors: - 
Usually caused by:
Invalid code (ReferenceError, TypeError, SyntaxError)
Logic mistakes (dividing by zero, invalid function calls)
Explicit throw statements
Can be caught using try...catch

2. Asynchronous Errors: - 
Must be caught using:
Callbacks → if (err) return ... Use Error-First Callbacks (classic Node.js style)
Promises → .catch()
Async/Await → try...catch

3. Operational Errors
File not found
Database connection timeout
Network failure

4. Programmer Errors
Bugs in code like undefined, Variable not decleread

uncaughtException
unhandledRejection

Q. If your API is giving slow responses, how will you optimize it?

1. “I’ll start by identifying where the slowdown is — whether it’s the database,sq
network, code logic, or external service.”

2. Database Optimization
    a) Adding indexes on frequently filtered columns
    b) Avoiding SELECT * (fetch only needed fields)
    c) Using pagination (LIMIT / OFFSET) for large results

3. Caching Layer    
“I’ll cache frequently requested data using Redis or in-memory caching to reduce database hits.”

4. Code-Level Optimization
    a) “I’ll optimize the code itself — removing blocking operations, using async/await properly, and batching operations.”
    b) Use Promise.all() for parallel requests
    c) Avoid blocking code (like heavy loops or sync file I/O)
    d) Move CPU-heavy work to worker threads or queues
    e) Stream

5. Server and Deployment Optimization
“I’ll optimize the server environment — like scaling horizontally or using load balancers.”
    a) Use PM2 cluster mode to utilize all CPU cores
    b) Scale horizontally with load balancer (NGINX / AWS ELB)
    c) Use connection pooling for DB connections
    d) Enable compression middleware
    e) Optimize Node.js event loop (no blocking operations)

6: Give a Real Example (This impresses interviewers)
“For example, once our /users API was taking 2.5s because it fetched related orders separately for each user.
I used Promise.all() and added Redis caching, which reduced the response time to 150ms.”

Q. If a problem occurs in your app, how will you make sure it doesn’t impact the entire application?
1. Design for Isolation (Modular Architecture)
    a) I structure my app in modules so that one failure doesn’t affect others.
    b) Split large apps into microservices or modular components
    c) Use separate routes/controllers for different features
    d) I ensure each module in my Node.js app (like user, order, payment) is independent. 
       So if one module fails, the others continue working.

2. Add Proper Error Handling
    I use centralized error handling middleware so that even if one API throws an error, the server continues to run.

3. I run Node.js apps with PM2, which restarts the process automatically on crash and ensures high availability.


Q. What is a Memory Leak?
A memory leak happens when unused objects remain in memory because
something in your code still holds a reference to them.

Example:- 
let leaks = [];

function memoryLeak() {
  // Each call pushes data into global array and never clears it
  leaks.push(new Array(1000000).fill("*"));
  console.log("Current leaks:", leaks.length);
}

// Call function repeatedly
setInterval(memoryLeak, 1000);

So if your code accidentally keeps a reference (like in global variables, closures, or event listeners),
GC can’t free that memory, which causes a memory leak.

How to Detect It: - 
setInterval(() => console.log(process.memoryUsage()), 5000);
Use tools like:- 
1. Capture heap snapshots with --inspect and analyze in Chrome DevTools.
2. clinic.js


*******************************************************************************

Angular : -
1. Try-Catch for synchronous operations.
2. Global Error Handling:
Set up a global error handler to catch unhandled errors in your application.
This can be done by creating a service that implements the ErrorHandler interface.
3. RxJS catchError Operator:
For asynchronous operations involving observables, the catchError operator from the RxJS library is a valuable tool.
4. Use Interceptors for API errors to avoid repeating catchError everywhere.

The event loop is the heart of Node. js, enabling non-blocking, asynchronous execution.
Unlike traditional multi-threaded models, Node. js is single-threaded but uses an event-driven, 
non-blocking architecture to handle I/O-bound operations efficiently.


View is a virtual table that is use to store the data in VT insted of intrecting to main table again and again


Today Activity
********** L-0
third largest
second largest
Merge two objects deeply
Convert nested object to flat object
reversed number


********** L-2

Pattern


*/

/*
LEVEL => 0
Q.1  Deep clone an object (Top). 1D, 2D, 3D
Q.2  Compare two objects for equality (Top). 1D, 2D, 3D
Q.3  Group objects by a property (Top) 1D, 2D, 3D
Q.4  Merge two objects deeply.(Top) 1D, 2D, 3D
Q.5  Convert nested object to flat object.(Top) 1D, 2D, 3D
Q.6  Find keys with maximum value in an object. 1D, 2D
Q.7  Implement array chunking (split array into smaller arrays) 1D, 2D
Q.8  Find the longest substring without repeating characters. (Not needed)
Q.9  Find the missing number in a sequence 1D, 2D
Q.10 Rotate an array k times. 1D, 2D, 3D
Q.11 Find the intersection of two arrays. 1D, 2D
Q.12 Move all zeros to the end of an array . 1D, 2D
Q.13 Find the second largest element in an array (Top). 1D, 2D, 3D
Q.14 Find duplicate numbers in an array. 1D, 2D
Q.15 Flatten a nested array without using flat(). 1D, 2D, 3D
Q.16 Reverse a string without using built-in reverse(). 1D, 2D
Q.17 Check if a string is a palindrome. 1D, 2D
Q.18 Find the first non-repeating character in a string. 1D, 2D
Q.20 Count the occurrences of each character in a string. 1D, 2D
Q.21 Reverse words in a sentence. 1D, 2D
Q.22 Check if two strings are anagrams. 1D, 2D
Q.23 Find the longest common prefix in an array of strings. (pending)
Q.24 Remove duplicate characters from a string. 1D, 2D
Q.25 Find all pairs in an array that sum to a target. 1D, 2D, 3D
Q.26 Reverse digits of a number. 1D, 2D, 3D, 4D
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
Q.40 Write a program to find Third Largest number (Top) 1D, 2D, 3D
Q.41 Write a program of Two Sum 1D, 2D, 3D, 4D
Q.42 --------------------------------
Q.43 Write a function that returns the deepest key-value pair in a nested object 1D, 2D, 3D
Q.44 Write a program for setZero Matrix (pending)
Q.45 -----------------------------------------
Q.46 Write a program to check valid brackets 1D, 2D, 3D
Q.47 Find the Longest Key in an Object 1D, 2D, 3D
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
Q.57 How to make object immutable 1D, 2D, 3D
Q.58 Group deeply objects by a property 
Q.59 How to remove space and any explemenatry fro a string
Q.60 How to remove only special characters from a string 

*/



/*
LEVEL => 1
Q.1 Print3D this pattern 1D, 2D, 
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
Q.2 Prints a square 1D
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
Q.3 Prints a right-angled triangle with numbers in increasing row order, aligned to the right 1D, 2D, 3D
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
Q.4 Prints a pyramid where each row contains numbers from 1 to the row number. 1D, 2D, 3D
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
Q.5 Print reverse pyramid 1D, 2D, 3D
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
Q.6 Prints a pyramid where numbers increase continuously from top to bottom. 1D, 2D, 3D
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
Q.7 Print Zero-One Triangle Pattern 1D, 3D
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
Q.8 Palindrome Triangle Pattern 1D, 2D, 3D
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
Q.9 Rhombus Pattern 1D, 3D
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
Q.10 Diamond Star Pattern 1D, 3D
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
Q.11 Butterfly Star Pattern (pending)
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
Q.12 Square Fill Pattern 1D, 2D, 2D, 3D
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
Q.13 Right Half Pyramid Pattern 1D, 2D, 3D
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
Q.14 Reverse Right Half Pyramid Pattern 1D, 2D, 3D
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
Q.15 Left Half Pyramid Pattern 1D, 2D, 3D
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
Q.16 Reverse Left Half Pyramid Pattern 1D, 2D, 3D
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
Q.17 Triangle Star Pattern 1D,2D, 3D
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
Q.18 Reverse Number Triangle Pattern 1D, 3D
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
Q.19 Mirror Image Triangle Pattern (pending) 1D
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
Q.20 Hollow Triangle Pattern 1D, 3D
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
Q.21 Hollow Reverse Triangle Pattern 1D, 3D
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
Q.22 Hollow Diamond Pyramid 1D, 3D
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
Q.23 Hollow Hourglass Pattern 1D, 3D
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
Q.24 Pascal's Triangle 1D, 3D
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
Q.25 Right Pascal’s Triangle 1D, 3D
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
Q.26 K Pattern 1D, 3D
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



/*
LEVEL => 2
Q.1 Write a function to find the maximum number of pairs that can be formed from an array. 1D, 2D

function maxPairs(arr) {
  const freq = {};
  let pairs = 0;

  // Count frequency
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Each 2 occurrences make 1 pair
  for (let key in freq) {
    pairs += Math.floor(freq[key] / 2);
  }

  return pairs;
}


const arr = [1, 1, 2, 2, 3, 3, 3, 3];
const result = maxPairs(arr);
console.log(result)

Q.2 Write a function to find the longest ascending sequence in an array. 1D

function longestAscendingSequence(arr) {
  if (arr.length === 0) return [];

  let longest = [arr[0]];
  let current = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      current.push(arr[i]);
      if (current.length > longest.length) {
        longest = [...current];
      }
    } else {
      current = [arr[i]]; // reset
    }
  }

  return longest;
}

const arr = [1, 3, 2, 4, 6];
const result = longestAscendingSequence(arr);
console.log(result)

Q.3 Write a function to find the pair of elements in an array that have the minimum difference. 1D

function minDiffPair(arr) {
  if (arr.length < 2) return null;

  arr.sort((a, b) => a - b); // sort ascending
  let minDiff = Infinity;
  let pair = [];

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      pair = [arr[i - 1], arr[i]];
    }
  }

  return { pair, minDiff };
}

const arr = [4, 9, 1, 7];
const result = minDiffPair(arr);
console.log(result)

Q.4 Write a function to check if an array has three consecutive common numbers. 1D
function hasThreeConsecutive(arr) {
  if (arr.length < 3) return false; // need at least 3 elements

  for (let i = 0; i < arr.length -2; i++) {
    if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
      return true; // found three in a row
    }
  }

  return false; // no triple found
}

console.log(hasThreeConsecutive([1, 2, 2, 2, 3]));

Q.5 Write a function to find the median of two sorted arrays.
function findMedianSortedArrays(nums1, nums2) {
    let arr = (nums1.concat(nums2)).sort((a, b) => a - b);
    let left = 0
    var right = arr.length - 1;

    let mid = Math.floor((left + right) / 2);

    if (arr.length % 2 !== 0) {
        return arr[mid];
    } else {
        return (arr[mid] + arr[mid + 1]) / 2;
    }
}

console.log(findMedianSortedArrays([1, 3], [2]))

Q.6 Write a function to hide a credit card number.
function hideCreditCard(cardNumber) {
  // Convert to string in case a number is passed
  const str = String(cardNumber).replace(/\s+/g, ''); // remove spaces
  if (str.length <= 4) return str; // nothing to hide

  const visible = str.slice(-4);       // last 4 digits
  const hidden = '*'.repeat(str.length - 4); // mask rest
  return hidden + visible;
}

console.log(hideCreditCard("1234567812345678")); // ************5678


Q.7 Write a function to convert the second letter of each word of a given sentence into uppercase. 
function secondLetterUppercase(str, k) {
  return str
    .split(' ').map(word => {
      if (word.length < 2) return word;
      return word[0] + word[1].toUpperCase() + word.slice(2)
    }).join(' ');
}

var str = 'this is a nice car'
console.log(secondLetterUppercase(str))

Q.8 Write a function to split a string at each occurrence of a capital letter. 1D
function splitAtCapitals(str) {
  const result = [];
  let current = "";

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    // Check if current character is uppercase (A–Z)
    if (ch >= 'A' && ch <= 'Z' && current.length > 0) {
      // Push the collected chunk before the capital
      result.push(current);
      current = ch; // start new chunk
    } else {
      current += ch;
    }
  }

  if (current) result.push(current); // add the last chunk
  return result;
}

console.log(splitAtCapitals('helloWorld'));

Q.9 Write a function to solve a cryptogram. 1D
function solveCryptogram(cipherText, mapping) {
  let result = '';

  for (let ch of cipherText) {
    if (mapping.hasOwnProperty(ch)) {
      result += mapping[ch];
    } else {
      result += ch; 
    }
  }

  return result;
}

const obj = {'a': 'd', 'b': 'i', 'c': 'o'};
const chiper = 'abc'
console.log(solveCryptogram(chiper, obj));
**********************************************
function solveCryptogram(cipherText, mapping) {
  // mapping example: { A: 'T', B: 'H', C: 'E' }
  return cipherText
    .split('')
    .map(ch => {
      const upper = ch.toUpperCase();
      return mapping[upper] ? mapping[upper].toLowerCase() : ch;
    })
    .join('');
}

const cipher = "XLMW MW E QYR.";
const key = {
  X: 'T', L: 'H', M: 'I', W: 'S', E: 'A', Q: 'F', Y: 'U', N: 'N', R: 'Y'
};

console.log(solveCryptogram(cipher, key));

Q.10 Write a function to censor a word in a sentence. 1D
function censorWord(sentence, word) {
    let lenthOfAWord = word.length;
    const star = "*"
    return sentence.replace(word, star.repeat(lenthOfAWord));
}

const sentence = 'The cat sat on the mat.';
const word = 'cat';

console.log(censorWord(sentence, word))

Q.11 Write a function to swap two characters in a string. 1D
function doubleCharacterSwap(str, c1, c2) {
     let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1) {
      result += c2;   // replace c1 with c2
    } else if (str[i] === c2) {
      result += c1;   // replace c2 with c1
    } else {
      result += str[i]; // keep other characters as is
    }
  }

  return result;
};
const str = 'aabbcc';
const c1 = 'a';
const c2 = 'c';
console.log(doubleCharacterSwap(str, c1, c2));

Q.12 Write a function that swaps the case of the first and last characters. 1D
function swapCaseFirstLast(str) {
    let newWords = str.split(" ")
    let container = []
    for(let i = 0;i < newWords.length;i++){
            let a = newWords[i]
            let firstLetter = a.charAt(0)
            let lastLetter = a.substring(a.length -1)
             let ren = a.substring(1, a.length -1)
             let first = firstLetter == firstLetter.toUpperCase() ? firstLetter.toLowerCase():  firstLetter.toUpperCase()
             let last = lastLetter == lastLetter.toUpperCase() ? lastLetter.toLowerCase() : lastLetter.toUpperCase()
            
            if(newWords[i].length == 1){
                container.push(first)
            }else{
                container.push(first+ren+last)
            }
    }   

    return container.toString().split(',').join(" ")
}

console.log(swapCaseFirstLast('Hello World'))

Q.13 Write a function to find the next letter in the alphabet for a given letter.
function findNextLetter(ch) {
  return ch == "z" ? ch : String.fromCharCode(ch.charCodeAt() + 1);
};

console.log(findNextLetter('h'))

Q.14 Write a function to find the missing letter 1D
function findAllMissingLetters(str) {
  let missing = [];
  for (let i = 0; i < str.length - 1; i++) {
    const current = str.charCodeAt(i);
    const next = str.charCodeAt(i + 1);

    for (let code = current + 1; code < next; code++) {
      missing.push(String.fromCharCode(code));
    }
  }
  return missing;
}

console.log(findAllMissingLetters("abcdfkl"));

Q.15 Write a function to replace smiley faces ":)" with sad faces ":(". 1D
function replaceSmiley(input) {
    
    arr = input.replaceAll(')','(');
    return arr
};

const str = ":) :) :) All smiles here :)";
console.log(replaceSmiley(str))

Q.16 Write a function to reverse only the letters in a string.
function reverseLettersKeepNumbers(str) {
  const output = [];
  
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (/^[a-zA-Z]+$/.test(char)) output.push(char);
  }

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char === '0' || parseInt(char)) 
      output.splice(i, 0, char);
  }

  return output.join('');
}
var str = "a1b2c3d4";

console.log(reverseLettersKeepNumbers(str))

Q.17 Write a function to reverse only the letters in a string.
function reverseLettersKeepNumbers(str) {
  const output = [];
  
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (/^[a-zA-Z]+$/.test(char)) output.push(char);
  }

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char === '0' || parseInt(char)) 
      output.splice(i, 0, char);
  }

  return output.join('');
}
var str = "a1b2c3d4";

console.log(reverseLettersKeepNumbers(str))

Q.18 Write a function to check if any word in a sentence repeats.
function findRepeats(sentence) {
  const words = sentence.toLowerCase().split(' ');
  const seen = new Set();
  const repeats = new Set();
  for (const word of words) {
    if (seen.has(word)) repeats.add(word);
    seen.add(word);
  }
  return [...repeats].length != 0 ? "Repeat" : 'Non Repeat';
}

console.log(findRepeats("Hello hello world world")); 

Q.19 Write a function to make a given string palindrome based on another string.
function makePalindrome(str1, str2) {
  let result = []
  for (let i = str2.length - 1; i >= 0; i--) {
    result.push(str2[i])
  }
  for (let i of str1) {
    if (result.includes(i)) continue;
    else result.push(i);
  }
  result = result.join('') + str2;
  reverse = result.split('').reverse().join('');
  if (result === reverse) return result;
  else return '';
};

console.log(makePalindrome("ivicc", "ic"))

Q.20 Write a function to match strings by letters.
function stringMatchByLetters(str1, str2) {
   for(let i=0; i<str1.length;i++){
    if(!str2.includes(str1[i])){
      return "No Match"
    } 
   }
   
   return "Match"
}

console.log(stringMatchByLetters("hello","world"))

Q.21 Write a function to move all capital letters in a string to the front.
function moveCapitalsToFront(s) {
    let cap = "";
    let nocap = "";
    for(let char of s) {
        if(char >= 'A' && char <= 'Z') {
            cap += char;
        } else {
            nocap += char;
        }
    }
    return cap + nocap;
}

Q.22 Write a function to remove special characters from a string.
function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

Q.23 Write a function to find the longest consecutive zeros in a given string.
function largestConsecutiveZeros(str) {
  let maxZeros = 0;
  let currentZeros = 0;

  for (let char of str) {
    if (char === "0") {
      currentZeros++;
      if (currentZeros > maxZeros) {
        maxZeros = currentZeros;
      }
    } else {
      currentZeros = 0; // reset when not zero
    }
  }

  return maxZeros;
}

const str = "1031200140001";
console.log(largestConsecutiveZeros(str)); 

// Q.24 Write a function to find the longest common ending in two strings.
function findLongestCommonEnding(str1, str2) {
    let common = ""
    let i = str1.length - 1;
    let j = str2.length - 1;
    console.log(i)
    console.log(j)
     while (i >= 0 && j >= 0 && str1[i] === str2[j]) {
        common = str1[i] + common;
        i--
        j--
     }
     return common;
}

const str1 = "programming";
const str2 = "gaming";
console.log(findLongestCommonEnding(str1, str2));

// Q.25 Write a program to group the anagaram
function groupAnagaram(arr) {
  const map = new Map();
  for (let word of arr) {
    const sorted = word.split('').sort().join('');

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }
  return Array.from(map.values());
}

var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagaram(arr));

// Q. Write a function to format a number using thousands separators.
function formatWithCommas(num) {
  const str = String(num);
  let result = "";
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;

    if (count === 3 && i !== 0) {
      result = "," + result;
      count = 0;
    };
  }

  return result;
};

console.log(formatWithCommas(1234567))

*/



/*
OPQ BASED SSECTION

Q. 1 
setTimeout(() => {
  console.log('setTimeout-1');
  Promise.resolve().then(() => {
    console.log('Promise-1')
  })
}, 0);

new Promise((resolve, reject) => {
  console.log('Promise-2')
  setTimeout(() => {
    console.log('setTimeout-2');
    resolve('Promise-3')
  },0)
}).then((res) => {
  console.log('dot then.');
  console.log(res)
})

Q.2 
for(var i = 0; i<10; i++) {
    setTimeout(() => {
        console.log(++i)
    }, 0)
};

Q.3 
fun();
var a = 10;
function fun() {
	console.log(a);
	a = 11;
}
console.log(a);

Q.4 
var arr = [
{firstname: "Greet-1", lastname: "Foo-1", address: "Noida-1"},
{firstname: "Greet-2", lastname: "Foo-2", address: "Noida-2"},
{firstname: "Greet-3", lastname: "Foo-3", address: "Noida-3"},
{firstname: "Greet-4", lastname: "Foo-4", address: "Noida-4"},
{firstname: "Greet-5", lastname: "Foo-5", address: "Noida-5"},
];

function displayName(){
	return `${this.firstname} ${this.lastname}`
};

console.log(displayName.call(arr.slice(-1)[0]));

Q.5 
console.log([1,2,3,4,5,6].filter((m, i) => { if (m%2 === 0) return m; }));
console.log([1,2,3,4,5,6].map((m, i) => { if (m%2 === 0) return m; } ));

Q.6
function userDetails(username) {
  if (username) {
    console.log(salary);
    console.log(age);
    let age = 30;
    var salary = 10000;
  }
  console.log(salary);
  console.log(age);
};

userDetails("Test");


* */
