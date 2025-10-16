function main(obj, parentKey = '', result = {}){
    var num = 12345;
    var reversedNum = num.toString().split('').reverse().join('');
    
    return parseInt(reversedNum) * Math.sign(num)

  
};


const obj = {
  name: "John",
  age: 25,
  address: {
    city: "Delhi",
    details: {
      pin: "110001",
      landmark: "Near Park"
    }
  }
};
console.log(main(obj));

/*

m
ma
mal
maly
malyl

selelct * from profile
join profile_id as p_id on  p_id = profile.id
* */







































// var jwt = require('jwt');

// function assignToken(){
//   const accessToken = jwt.sign({email: "greet@yopmail.com", role: getRoles()[0]}, {expireIn: new Date().getMinutes() + 60});
//   performTask(accessToken)
// }

// function getRoles(){
//   const role = ['Manager', 'Team Lead', 'Developer'];
//   return role;
// }

// function performTask(accessToken){
//   var decodedPayload = jwt.verify(accessToken);
  
//   if(decodedPayload.role == 'Manager'){
//     taskA()
//   };

//   if(decodedPayload.role == 'Team Lead'){
//     taskB()
//   };

// }

// function taskA(){
//   console.log('Task A')
// }

// function taskB(){
//   console.log('Task B')
// }





