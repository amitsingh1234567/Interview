/************************************** OBJECT BASED QUESTION START******************************/ 
// Q. 1
// function add(x) {
//     return function(y) {
//         if (typeof y !== 'undefined') {
//             x = x + y;
//             return arguments.callee
//         } else {
//             return x;
//         }
//     };
// }
// const result = add(1)(2)(5)(8)()
// console.log('result :>> ', result);

// Q. 2
// const a = {};
// const b = {key: "b"}
// const c = {key: "c"}

// a[b] = 420;
// a[c] = 120;
// console.log('a[b] :>> ', a[b]);

// Q. 3
// const func = ((a) => {
// delete a;
// return a;
// })(5);
// console.log('func :>> ', func);

// Q. 4
// const user = {
//     name: 'Mohit',
//     age: 20,
//     "village district pincode": true
// }
// console.log('user :>> ', user["village district pincode"]);

// Q. 5 
// const property  = 'firstname';
// const value = "Ramesh";
// const obj = {
//     [property] : value
// }
// console.log('obj :>> ', obj);

// Q. 6
// const user = {
//     name: 'Rahul',
//     age: 20,
//     email: 'rahul@yopmail.com'
// }
// for(let key in user){
//     console.log('key :>> ', user[key]);
// }

// Q. 7
// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three'
// }
// console.log('obj :>> ', obj);

// Q. 8
// const multiplyNum = () =>  {
//     const  num = {
//         a: 100,
//         b: 200,
//         title: "Number"
//     }

//     let result;
//     for(let key in num){
//         if(typeof num[key] == "number"){
//             num[key] = num[key] * 2;
//         }
//     }
//     console.log('result :>> ', num);
// }
// multiplyNum();

// Q. 9
// const user = {name: "Ladiya", age: 21};
// const admin = {admin: true, admin: false, ...user}

// console.log('user :>> ', user);
// console.log('admin :>> ', admin);
// console.log(..."UseofSprid");

// Q. 10
// const setting = {
//     username: 'Piyush',
//     level: 1,
//     helth: 95
// };

// const data = JSON.stringify(setting, ["level", "helth"]);
// console.log('data :>> ', data);

// Q. 10
// const shape = {
//     radious: 10,
//     diameter: function() {
//         return this.radious * 2
//     },
//     perimater: () => 2 * Math.PI * this.radious
// }

// console.log(shape.diameter());
// console.log(shape.perimater());

// Q. 11
// const user = {
//     name: 'Piyush',
//     age: 25,
//     details: {
//         fname: 'Sobhit',
//         lastname: "NIC",
//         add: {
//             vill: "Noida Sector-16"
//         }
//     }
// }

// const name = "Mohit",
        
// cont  = {/*Variable Rename :*/ name : myName, details: {fname, lastname, add: {vill}}} = user;
// console.log(fname, lastname);
// console.log(vill);

// Q. 12
// function getItems(fruitList, faviroutFruit, ...args) {
//     let result;
//     result = [...fruitList,  ...args, faviroutFruit]
//     console.log('result :>> ', result);
// }
// getItems(['banana', 'apple'], 'orange', 'papaya', 'papaya22')

// Q. 13

// console.log({a: 10} === {a: 10});
// console.log({a: 12} === {a: 12});

// Q. 14
// var person = {name: "Piyush", age: 20};
// const member = [person];
// person = null;

// console.log('person :>> ', person);
// console.log('member :>> ', member);

// Q. 15
// const value = {number: 10};

// const multiply = (x = { ...value }) => {
//     console.log('x :>> ', x);
//     console.log((x.number *= 2));
// }
// multiply()
// multiply()
// multiply(value)
// multiply(value)

// Q.16 
// const changeAgeAndReference = (person) => {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50
//     }
//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log('personObj1 :>> ', personObj1);
// console.log('personObj2 :>> ', personObj2);

// Q. 17
// What is shell copy / deep copy

// const user = {
//     name: 'Piyush',
//     age: 20,
//     detais: {
//         empCode: "4585",
//         department: 'IT'
//     }
// }

// // const objClone = Object.assign({}, user);
// // Deep Copy
// const objClone = JSON.parse(JSON.stringify(user))
// objClone.detais.department = 'SE';

// console.log('user :>> ', user);
// console.log('objClone :>> ', objClone);

/************************************** OBJECT BASED QUESTION END******************************/ 

/************************************** INTERVIEW BASED QUESTION START******************************/ 
// Q. 1
// function fruit(){
//     console.log(name)
//     console.log(price)
//     var name = 'apple';
//     var price = 20
// }
// fruit()

// Q. 2
// console.log(+true)
// console.log(typeof +true)

// Q. 3 
// var x;
// var x = 10;
// console.log(x)

// Q. 4 
// var x;
// let x = 10;
// console.log(x)

// Q. 5
let a = 3;
let b = new Number(3);
console.log( typeof b)
console.log(a)

console.log(a == b)
console.log(a === b)

// Q. 6
// function fruit() {
// console.log("fruit");
// }

// // It will not effect on function
// fruit.name = 'efefef';
// fruit()

// Q. 7
// let number = 0;
// console.log(number++)
// console.log(++number)
// console.log(number)

// Q. 9
// let arr = [2];
// console.log(typeof arr)

// Q. 10
// const sum = eval('10*10+5')
// console.log(sum)


// var Employee = {
// company: 'Acme'
// }
// var employee1 = Object.create(Employee);
// delete employee1.company
// console.log(employee1.company);
// console.log('Employee :>> ', Employee);
// console.log('employee1 :>> ', employee1);








/************************************** INTERVIEW BASED QUESTION END******************************/ 


    
