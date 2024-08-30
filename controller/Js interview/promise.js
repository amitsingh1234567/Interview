// function Task1(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//      });
// };

// function Task2(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve();
//             reject("something went wrong in Task-2");
//         }, 3000)
//      });
// };

// function Task3(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 500)
//      });
// };

// /******************************** Async Await Example START ************************************/
// async function doTask(){
//     try{
//         await Task1();
//         console.log("Task-1 has been done.");

//         await Task2();
//         console.log("Task-2 has been done.");

//         await Task3();
//         console.log("Task-3 has been done.");

//     }catch(error){
//         console.log("Error occured:", error);
//     }finally{
//         console.log("Process End");
//     }
// }

// doTask();

/******************************** Async Await Example END ************************************/


/******************************** Promise Example START ************************************/
// Task1().then(() => {
//     console.log("Task-1 has been done.");
//     return Task2();
// }).then(() => {
//     console.log("Task-2 has been done.");
//     return Task3();
// }).then(() => {
//     console.log("Task-3 has been done.");
// }).catch((error) => {
//     console.log("Error occured ", error);
// }).finally(() => {
//     console.log("Process End");
// })

/******************************** Promise Example END ************************************/



/******************************** Call Back Hell Example START ************************************/
// function task1(callback){
//   setTimeout(() => {
//       console.log('Task-1 has been done.')
//       callback();
//   }, 3000);
// }

// function task2(callback){
//   setTimeout(() => {
//       console.log('Task-2 has been done.')
//       callback();
//   }, 400);
// }

// function task3(callback){
//   setTimeout(() => {
//       console.log('Task-3 has been done.')
//       callback();
//   }, 1000);
// };

// task1(() => {
//   task2(() => {
//       task3(() => {
//       });
//   });
// });

/******************************** Call Back Hell Example END ************************************/