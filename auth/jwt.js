var express = require('express');
const jwt = require('jsonwebtokn');
const app = express();

app.use(express.json());

var users = [
    {name: "Greet", email: "greet@gmail.com", password: "123456", role: "admin"},
    {name: "Foo", email: "foo@gmail.com", password: "123456", role: "user"}
]
app.get('/login', async (req, res, next) => {
  try{
      req.body = {email: "greet@gmail.com", password: "123456"};
      const user = users.filter(item => item.email === req.body.email && item.password === req.body.password);

      if(user.length === 0) 
        return res.status(400).json({msg: "Invalid user"});

      const accessToken = jwt.sign({email: req.body.email, role: user[0].role}, 'Your Secret Key', {expireIn: "1h"});
      return res.status(200).json({msg: "Login successfully", token: accessToken});
  }catch(err){
    console.log(err)
  }
});

app.get('/get_profile', authMiddleware, authorizedRoles('user'), async (req, res, next) => {
  try{
    return res.status(200).json({msg: "Got profile details"});
  }catch(err){
    console.log(err)
  }
});

app.get('/admin', authMiddleware, authorizedRoles('admin'), async (req, res, next) => {
  try{
    return res.status(200).json({msg: "Success"});
  }catch(err){
    console.log(err)
  }
});


function authMiddleware(req, res, next){
  try{
    const authHeaders = req.headers?.authorization;
    const token = authHeaders.split(' ')[1];
    if(!token)
    return res.status(401).json({msg: 'Access token not provided'})

    const decoded = jwt.verify(token, 'Your Secret Key');
    req.user = decoded;
    next();
  }catch(err){
    return res.status(401).json({msg: "Invalid or expired token"});
  }
};

function authorizedRoles(...allowedRoles){
  return (req, res, next) => {
      if(!req.user || !allowedRoles.includes(req.user.role)){
        return res.status(403).json({msg: "Acccess denied: Insufficient role"});
      };
      next();
  };
}

app.listen(3000);