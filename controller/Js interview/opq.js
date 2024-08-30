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

// Q. 18
// var y = 1
// if(function f(){}){
//     y += typeof f
// }
//  console.log(y)

// Q. 19
// var k = 1;
// if(1){
//     function f(){}
//     k += typeof f;
// }
// console.log(k)

// Q. 20
// var k = 1;
// if(1){
//    eval(function f(){})
//     k += typeof f;
// }
// console.log(k)

// Q. 21
// var Employee = {
//     company: 'xyz'
//   }
//   var emp1 = Object.create(Employee);
//   delete emp1.company
//   console.log(emp1.company);
// The code above will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property

// Q. 22
// var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
// delete trees[3];
// console.log(trees.length);
// The code above will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected by this

// Q. 23
// var bar = true;
// console.log(bar + 0);   
// console.log(bar + "xyz");  
// console.log(bar + true);  
// console.log(bar + false);

// Number + Number -> Addition
// Boolean + Number -> Addition
// Boolean + Boolean -> Addition
// Number + String -> Concatenation
// String + Boolean -> Concatenation
// String + String -> Concatenation

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
// let a = 3;
// let b = new Number(3);
// console.log( typeof b)
// console.log(a)

// console.log(a == b)
// console.log(a === b)

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

// Q. 8
// let arr = [2];
// console.log(typeof arr)

// Q. 9
// const sum = eval('10*10+5')
// console.log(sum)

// Q. 10
// var z = 1, y = z = typeof y;
// console.log(y);

// Q. 11
// NFE (Named Function Expression)
// var foo = function bar() { return 12; };
// typeof bar();

// Q. 12
// var salary = "1000$";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";

//   console.log("My New Salary " + salary);
// })();

// Q. 13
// function User(name) {
//     this.name = name || "JsGeeks";
//   }
  
// var person = new User("xyz")["location"] = "USA";
// console.log(person);
  
// Q. 14
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA;
// arrB[0]=42;
// console.log(arrA)

// Q. 15
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA.slice();
// arrB[0]=42;
// console.log(arrA)

// Q. 16
// var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
// var arrB = arrA;
// arrB[0].prop1=42;
// console.log(arrA);

// Q. 17
// var employeeId = 'abc123';

// function foo() {
// 	employeeId();
// 	return;

// 	function employeeId() {
// 		console.log(typeof employeeId);
// 	}
// }
// foo();

/*

Q. 18
function Person() {
	this.age = 0;
  
	setInterval(() => {
	console.log(this.age++); // `this` refers to the Person instance
	}, 1000);
  }
  
  let p = new Person();

Q. 19
function Counter() {
  this.count = 0;
  setInterval(function() {
    this.count++;
    console.log(this.count);
  }, 1000);
}

let c = new Counter();

Q. 20
function Counter() {
	this.count = 0;
	setInterval(function() {
	  this.count = 0
	  this.count++;
	  console.log(this.count);
	}, 1000);
  }
  
  let c = new Counter();

Q.21
const obj = {
  value: 1,
  increment: () => {
    this.value++;
    console.log(this.value);
  }
};

obj.increment();

Q.22
function Greet(){
	this.name = 'Jhon';
	Object.prototype.getName = () => {
		console.log(this.name);
	};
};

var obj1 = new Greet();
obj1.getName()

Q.23
function Greet(){
	this.name = 'Jhon';
};

Object.prototype.getName = () => {
	console.log(this.name);
};
var obj1 = new Greet();
obj1.getName()

Q.24
function Counter() {
  this.count = 0;
  var self = this;
  setInterval(function() {
    self.count++;
    console.log(self.count);
  }, 1000);
}

let c = new Counter();

* */

/************************************** INTERVIEW BASED QUESTION END******************************/ 


/************************************** OPQ New START******************************/
/*
Q.1
var length = 20;

function count(){
    console.log(this.length);
};

const data = [count, "A", 0];

data[0]()

Q.2
function sum(num1, num2){
    "use strict"
    num1 = 100;
    num2 = 200;
    return arguments[0] + arguments[1]
};

console.log(sum(2,5))

Q.3
const number = 21;
console.log(number.toString())
console.log(number.toString(22))

Q.4
function getChees(cb){
    setTimeout(() => {
        const chees = "🍕";
        console.log("Here is the chees", chees);
        cb(chees);
        // return chees;
    },2000);
};

var chees = getChees((chees) => {
    console.log(chees)
});

Q.5
let a = 10;

(function(){
    console.log(a);
    let a = 20;
    console.log(20)
})()

Q. 6
const promise = new Promise((res, rej) => {
    res(2)
})

promise.then((result)=> {
    console.log(result)
    return result*2;
}).then((result)=> {
    console.log(result)
    return result*2;
}).then((result)=> {
    console.log(result)
    return result*2;
}).catch((err)=> {
    return err
})

Q.7 
function generateOTP(){
    return  Math.floor(Math.random() * 9000 + 1000);
};

var otp =  generateOTP();
console.log(otp);

Q.8
console.log(0.1 + 0.2 === 0.3)

Q.9 
var foo = 'foo';

function showName(){
    foo = 'foo-20';
    return;
    function foo(){};
}

showName();
console.log(foo)

Q. 10
function f1(a,b, ...c){};
function f2(a, b=2, c){};

console.log(f1.length)
console.log(f2.length)

Q. 11
function Person(fname, lname){
    this.firstName= fname;
    this.lastName = lname;
};

var p1 = new Person("Jhon", 'Doe');
var p2 =  Person("Jhon", 'Doe');
console.log(p1)
console.log(p2)

Q. 12
console.log(Number(""))
console.log(parseInt(""))

Q. 13
console.log(Number(""))
console.log(parseInt(""))

Q. 14
console.log(Number("8*3"))
console.log(parseInt("9*2"))

Q. 15
if(0){
    function getData(){}
}
console.log(getData)

Q. 16
var obj = {};
function transform(data){
    data.name = 'JS';
    data = null;
    return data;
};

var newObj = transform(obj);
console.log({obj, newObj})

Q. 17
console.log(JSON.stringify("JS") === "JS")

Q.18
var arr = ["name"];
var obj = {};
obj.name = "Frontend Developer";
obj[arr] = "Backend Developer";

console.log(obj)

Q. 19
function fetch(){
    A = 7;
    console.log(A);
};

let A;
fetch()

Q.20
const Person = () => {
    this.name = 'JS';
    return this
};

var obj = new Person();
console.log(obj.name)

Q.21
"use strict"
{
    function show(){
        console.log("Inside Show")
    }
}
show()

Q.22
let x = [typeof x, typeof y][0];
console.log(typeof typeof x);

Q.23
var obj = Object.create(null);
const keyToCheck = 'keyToCheck';

if(obj.hasOwnProperty(keyToCheck)){
// Object.hasOwn(obj, keyToFind)
    console.log('Key found')
}else{
    console.log('Key not found')
}

Q.24
var obj = {};
key = 'constructor';
l
if(key in obj){
    console.log('Key found');
}else{
    console.log('Key not found');
}

Q.25
const promise = new Promise((_, reject) => {
    reject()
});

var result = promise.then(() => {
    console.log('Then Block')
}).then(() => {
    console.log('Then Block-2')
})
.catch(() => {
    console.log("Catch Block")
}).then(() => {
    console.log('Then Block After Catch')
});

Q.26
console.log([] == "")
console.log([] == [])



#228

*/


/************************************** OPQ New END ******************************/




// function task1(callback){
//   setTimeout(() => {
//       console.log('Task-1 completed !!')
//       callback();
//   }, 3000);
// }

// function task2(callback){
//   setTimeout(() => {
//       console.log('Task-2 completed !!')
//       callback();
//   }, 100);
// }

// function task3(callback){
//   setTimeout(() => {
//       console.log('Task-3 completed !!')
//       callback();
//   }, 1000);
// };

// task1(() => {
//   task2(() => {
//       task3(() => {
//       });
//   });
// });






// function getChees(callback){
//     setTimeout(() => {
//         const chees = 'chees';
//         console.log('Here is chees');
//         callback(chees);
//     }, 2000);
// };

// function makeDough(chees, callback){
//     setTimeout(() => {
//         const dough = 'dough';
//         console.log('Here is the dough');
//         callback(dough);
//     }, 2000);
// };

// function bakePizza(dough, callback){
//     setTimeout(() => {
//         const pizza = 'pizza';
//         console.log('Here is the pizza');
//         callback(pizza);
//     }, 2000);
// };

//  getChees((chees) => {
//     makeDough(chees, (dough) => {
//         bakePizza(dough, (pizza) => {
//             console.log('Got my', pizza);
//         })
//     })
//  });





// function deepCopy(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }

//     if (obj instanceof Date) {
//         return new Date(obj.getTime());
//     }

//     if (obj instanceof Array) {
//         const arrCopy = [];
//         obj.forEach((_, i) => {
//             arrCopy[i] = deepCopy(obj[i]);
//         });
//         return arrCopy;
//     }

//     if (obj instanceof Object) {
//         const objCopy = {};
//         Object.keys(obj).forEach(key => {
//             objCopy[key] = deepCopy(obj[key]);
//         });
//         return objCopy;
//     }

//     throw new Error('Unable to copy object! Its type isn\'t supported.');
// }

// const original = {
//     name: 'Alice',
//     age: 25,
//     address: {
//         city: 'Wonderland',
//         zip: '12345'
//     },
//     birthdate: new Date('1995-12-17T03:24:00')
// };

// const deepCopy = deepCopy(original);

// console.log(deepCopy); // Deep copy of the original object
// console.log(deepCopy === original); // false
// console.log(deepCopy.address === original.address); // false
// console.log(deepCopy.birthdate === original.birthdate); // false

