/*
OPQ BASED SSECTION

Q. 1 
setTimeout(() => {
  console.log('setTimeout-1');
  Promise.resolve().then(() => {
    console.log('Promise-1')
  })
}, 0);

new Promise((resolve, reject) => {
  console.log('Promise-2')
  setTimeout(() => {
    console.log('setTimeout-2');
    resolve('Promise-3')
  },0)
}).then((res) => {
  console.log('dot then.');
  console.log(res)
})

Q.2 
for(var i = 0; i<10; i++) {
    setTimeout(() => {
        console.log(++i)
    }, 0)
};

Q.3 
fun();
var a = 10;
function fun() {
    console.log(a);
    a = 11;
}
console.log(a);

Q.4 
var arr = [
{firstname: "Greet-1", lastname: "Foo-1", address: "Noida-1"},
{firstname: "Greet-2", lastname: "Foo-2", address: "Noida-2"},
{firstname: "Greet-3", lastname: "Foo-3", address: "Noida-3"},
{firstname: "Greet-4", lastname: "Foo-4", address: "Noida-4"},
{firstname: "Greet-5", lastname: "Foo-5", address: "Noida-5"},
];

function displayName(){
    return `${this.firstname} ${this.lastname}`
};

console.log(displayName.call(arr.slice(-1)[0]));

Q.5 
console.log([1,2,3,4,5,6].filter((m, i) => { if (m%2 === 0) return m; }));
console.log([1,2,3,4,5,6].map((m, i) => { if (m%2 === 0) return m; } ));

Q.6
function userDetails(username) {
  if (username) {
    console.log(salary);
    console.log(age);
    let age = 30;
    var salary = 10000;
  }
  console.log(salary);
  console.log(age);
};

userDetails("Test");

function myLogin() {
  setTimeout(() => {
    console.log("setTimeout");
  }, 1000)
};

console.log("A");
myLogin();
console.log("B");

Q.7
const data = false;
const data1 = new Boolean(false);

if(data){
console.log("fist")
}

if(data1){
console.log("second")
}

Q.8
console.log(1 + "2" + "2"); 
console.log(1+ +"2" + "2");
console.log(1+ -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2"); 
console.log("A" - "B" + 2);     
console.log(4 - "2" -1)
console.log({} + []);
console.log([] + {});

Q.9
function outer() {
    let count = 0;
    return function inner() {
        return count++;
    };
}
const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());

Q.10
console.log([1,2,3] + [4,5,6])

 */