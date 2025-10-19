function main(str1, str2){
  var current = [];
  
  for(let i = str2.length - 1; i >= 0; i--){
    current.push(str2[i]);
  };

  for(let char of str1){
    if(!current.includes(char)){
      current.push(char);
    }
  };

  var str = current.join('') + str2; 
  var reversedStr = str.split('').reverse().join('');

  if(str === reversedStr) return str;

  return 'Given string is not able to make a palindrome';

} 

console.log(main("ivicc", "icp"))






/*

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

*/