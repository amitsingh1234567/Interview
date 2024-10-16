function printDiamond(n) {
    for(let i = 1; i <= n; i++){
        let row = ' '.repeat(n - i);
        for(let j = 1; j <= i; j++) row += j;
        for(let j = i - 1; j >= 1; j--) row += j;

        console.log(row);
    };

    for(let i = n - 1; i >= 1; i--){
        let row = ' '.repeat(n - i);
        for(let j = 1; j <= i; j++) row += j;
        for(let j = i - 1; j >= 1; j--) row += j;

        console.log(row);
    }
}
printDiamond(7);


    1
   121
  12321
 1234321
123454321
 1234321
  12321
   121
    1