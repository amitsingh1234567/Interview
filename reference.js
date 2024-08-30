/*
Libuv insted deligate the work to operating system kernal 


* */



var a = {color:"red"}
var b= a
b.color = "black"
console.log(a,b)

// Sorting
let a = [1,3,5,2,4,3];

function scnd(){
console.log('1')
setTimeout(function(){
console.log('2');

},100)
console.log('3')
}

scnd();





// const getPromise = () => {
//     // console.log('1')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('2');
//             resolve()
//         }, 100)
//     });
// }


getPromise().then(() => {
    // console.log('3');
}).catch((err) => {
    
});

function short(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++){
            // swapping the elements
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        // if no elements are swapped
        // that means our array is sorted
        if(!swapped) break;
    }

    return arr
}



function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [1,3,5,2,4,3];
//   bubbleSort(numbers);
// console.log(numbers);
const result = short(numbers)
console.log('result :>> ', result);


function short1(arr){
    for(i= 0; i< arr.length - 1; i++){
        for(j = 0; j < arr.length - i - 1; j++){
            //Swapping
            
            if (arr[j] > arr[j+1]){
                console.log('loop :>> ', arr[j]);
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
    }

    console.log('arr :>> ', arr);
}




short1([5,9,9,3])





// function getResult() {
//     console.log('1')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2');
//             resolve();
//         },100)
//     })
// } 


// getResult().then(()=> {
// console.log('3')
// })
// .catch()

// async function useAsyncAwait(){
//     await getResult()
//     console.log('3')
// }

// useAsyncAwait()


// getResult().then()
// console.log('1')

/*"hello world*/


// function  scnd () {
//     console.log('1')
//     const promise = new Promise(resolve, reject);
//     return  setTimeout(() => {
//         console.log('2');
//     },100)
//     // console.log('3')
// } 


// scnd()
// .then()
// .catch()



// var a = {color:"red"}
// var b = {...a}
// b.color = "black"
// console.log(a,b)


// var a = {color:"red"}
// var b= ...a
// b.color = "black"
// console.log(a,b)


// let a = [1,3,5,2,4,3];



// function scnd(){

// console.log('1)
// setTimeout(function(){
// console.log('2');

// },100)
// console.log('3')
// }


// scnd();










const getPromise = () => {
    console.log('1')
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2')
            resolve('Promise resolved');
            // reject('Err')
        }, 100)
    })
    return myPromise;
};

// getPromise().then((result) => {
//     // console.log(result)
//     console.log('3')
// }).catch((err) => {
//     console.log(err)
// });

const parent3 = async (result) => {
    try{    
        console.log('result :>> ', result);
        await getPromise();
        console.log('3')
    }catch(err){
        // console.log(err)
    }
} 

// parent3()









const getSetTimeOutResult = async () => {
    setTimeout(() => {
        console.log('2')
        // await someOtherFunction();
      }, 1000);
}

const parent2 = async () => {
    await getSetTimeOutResult()
    console.log('3')
}

// parent2();






const callMe = async () => {
    console.log('1')
    if(true){
        setTimeout(() => {
            console.log('2');
            // resolve()
        }, 100)
        // return 'hello world'
    }
    // console.log('3')
}

const parent = async () => {
    return  await callMe();
}


// (async () => {
//     const a = await parent();
//     console.log('3')
//     // console.log(a)
// })()

const obj = {
    a: 'dnvniv',
    getData: function (){
        console.log(this.a)
    }
}

// obj.getData()















short1 = (arr) => {
    for(i= 0; i< arr.length - 1; i++){
        for(j = 0; j < arr.length - i - 1; j++){
            //Swapping
            console.log('loop :>> ', arr);
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
    }

    console.log('arr :>> ', arr);
}

// short1([9,4,9,3])