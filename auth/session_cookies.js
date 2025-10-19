const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser())
app.use(express.json());

var users = [
    {name: "Greet", email: "greet@gmail.com", password: "123456", role: "admin"},
    {name: "Foo", email: "foo@gmail.com", password: "123456", role: "user"}
]


app.post('/login', async (req, res, next) => {
    try{
        const user = users.filter(item => item.email == req.body.email && item.password == req.body.password)
        if(!user.length){
            return res.status(400).json({msg: "Invalid user"});
        };

        const {v4: uuidv4 } = await import('uuid')
        const sessionId = uuidv4();

        setUser(sessionId, {user: user[0].name, createdAt: Date.now(), role: user[0].role});
        res.cookie('uuid', sessionId,  {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 1000
        });
        
        return res.status(200).json({msg: "Login Successfully..."})
    }catch(err){
        console.log(err)
    }
});

app.get('/user', authMiddleware, authorizeRoles('admin', 'user'), async (req, res, next) => {
    try{
        return res.status(200).json({msg: "Success"})
    }catch(err){
        console.log(err);
    }
});

app.get('/admin', authMiddleware, authorizeRoles('admin'), async (req, res, next) => {
    try{
        return res.status(200).json({msg: "Success"})
    }catch(err){
        console.log(err);
    }
});

const mapUserToSession = new Map();

function setUser(id, user){
    mapUserToSession.set(id, user)
};

function getUser(session){
   return mapUserToSession.get(session);
}

function authMiddleware(req, res, next){
    const sessionId = req.cookies?.uuid;
    const session = getUser(sessionId);

    if(!session) return res.status(401).json({msg: "Unauthorized"});

    if(Date.now() - session.createdAt > 60 * 60 * 1000){
        res.clearCookie();
        return res.status(401).json({msg: "Session Expires!!"});
    };

    req.user = session;
    next();
}

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: insufficient role' });
    }
    next();
  };
};

app.listen(3000, () => console.log('Server is running up...'))