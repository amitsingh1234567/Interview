const person = {
    name: "John",
    age: 25,
    aadharNumber: "1234-5678-9012",
    details: {email: "test@gmail.com"}
  };

  Object.defineProperty(person, 'aadharNumber', {writable: false});
  // For Nested Object   
  Object.defineProperty(person.details, 'email', {writable: false, enumerable: false}); 


console.log(person)
person.aadharNumber = '7888-5846-9852';
console.log(person)