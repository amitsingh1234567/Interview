function main(){
  var str = "swiss";
  const mapChar = {};
  var arr = [];

  for(let key of str){
    mapChar[key] = (mapChar[key] || 0) + 1;
  };

  for(let key in mapChar){
    if(mapChar[key] == 1)
      arr.push(key)
  }
  
  return arr[1];
  
}

console.log(main())
// [1, 2, 3, 4, 5, 6]


