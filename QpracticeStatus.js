/*
File name:- keepOutput.js
Q.1 Write a program to check valid brackets (Low)
Q.2 Find the Longest Key in an Object (Low)
Q.3 Captilized first letter of word (Low)
Q.4 Remove duplicate from array (Low)
Q.5 Remove duplicate from array of object (Low)
Q.6 Array shorting (Low)
Q.7 Array of object shorting (Low)
Q.8 Write a program to find Third Largest number (Low)
Q.8 Remove all the zero at the end (Low)
Q.9 Reverse string word wise (Low)
Q.10 Find Common key value in to this two object (Low)
Q.11 Move all zeros to the end of an array (Low)
Q.12 Find the missing number in a sequence (Low)
Q.13 Write a program to find Second Largest number (Low)
Q.14 Display this desired output { abc: 3, ccr: 2, jtv: 1 } 
    from this given Array ['abc','bac','bac','ccr','rcc','vtj'] (Low)
Q.15 Write a program to print Captial A-Z (Low)
Q.16 Write a program to print Captial a-z (Low)
Q.17 Compare two objects for equality (Low)
Q.18 Convert nested object to flat object (Low)
Q.19 Deep clone an object (Low)








const rotate = (nums, k) => {
  const n = nums.length;
  k %= n;
  
  // Take last k elements and put them in front of the rest
  return [...nums.slice(-k), ...nums.slice(0, -k)];
};

const arr2 = [1, 2];
const k2 = 5; 
console.log(rotate(arr2, k2))
*/