// var cryptp = require('crypto');

// console.log('-------------- 1')
// var password = cryptp.pbkdf2("password", "salt", 100000, 515, "sha512", (err, res) => {
//   console.log(res);
// });

// console.log('-------------- 2')














// const fs = require('fs');
// setTimeout(() => console.log('This is setTimeout 1'), 0)
// setTimeout(() => {
//     console.log('This is setTimeout 2');
//     process.nextTick(() => console.log('This is process.nextTick inside setTimeout'))
    
// },500)

// setTimeout(() => console.log('This is setTimeout 3'), 0)

// process.nextTick(() => console.log('This is process.nextTick 1'));
// process.nextTick(() => {
//     console.log('This is process.nextTick 2');
//     Promise.resolve().then(() => console.log('This is promise in process.nextTick'))
//     // process.nextTick(() => {
//     //     console.log('This is process.nextTick inside process.nextTick');
//     // })
// })
// process.nextTick(() => console.log('This is process.nextTick 3'));

// fs.readFile(__filename, () => {
//     console.log('This is file read operation...');
// })

// setTimeout(() => {
//     console.log('This is setTimeout 1');
//     setImmediate(() => console.log("This is setImmediate"))
// },10)


// process.nextTick(()=> console.log('This is nextTick'));

// Promise.resolve().then(() => console.log('This is promise.resolve'))

// timeout_vs_immediate.js

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate');
//   });
// });
