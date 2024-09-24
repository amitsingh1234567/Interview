'use strict'
const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012"
};

Object.preventExtensions(person);
console.log(person)
