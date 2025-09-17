function draw(n) {
  for(let i = 1; i <= n; i++){
    let row = '';

    for(let j = 1; j < i; j++){
      row += ' ';
    };

    for(let j = i; j <= n; j++){
      row += j + ' ';
    }
    console.log(row)
  }

  for(let i = n - 1; i >= 1; i--){
    let row = '';

    for(let j = 1; j < i; j++){
      row += ' ';
    };

    for(let j = i; j <= n; j++){
      row += j + ' ';
    }
    console.log(row)
  }
}
const n = 9;
draw(n);

/*
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

*/