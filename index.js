const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {X509Certificate,} = require('crypto');
const crypto = require('crypto');
const fs = require('fs')
const app = express();
const os = require('os');
// console.log(os.cpus().length)

// const key = 'mongodb+srv://amit-singh_1:9576435668@cluster0.49vnb.mongodb.net/Graphql?retryWrites=true&w=majority'
// /role-group-list
// const key = 'mongodb://localhost:27017/test'
app.use(bodyParser.json());

const Test = require('./controller/Js interview/test');
// require('./controller/Js interview/opq');
// require('./controller/Js interview/codingQ');

// app.use('/api', walletRoutes);
// app.use('/api/transactions', transactionRoutes);

let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321' },
  ];


// PUT endpoint (Replace a user)
app.put('/users/:id', (req, res) => {
const userId = parseInt(req.params.id, 10);
const userIndex = users.findIndex((user) => user.id === userId);

if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
}

// Replace the entire user
const updatedUser = {
    id: userId, // Ensure the ID remains unchanged
    ...req.body,
};

users[userIndex] = updatedUser;
res.json(updatedUser);
});

// PATCH endpoint (Partially update a user)
app.patch('/users/:id', (req, res) => {
const userId = parseInt(req.params.id, 10);
const user = users.find((user) => user.id === userId);

if (!user) {
    return res.status(404).json({ error: 'User not found' });
}

// Update only the fields provided in the request
Object.assign(user, req.body);

res.json(user);
});

app.get('/test', (req, res, next) => {
   const writableStream = fs.createWriteStream('output.txt');
   writableStream.write('Hello, Writable stream');

   const readableStream = fs.createReadStream('outpuot.txt', { encoding: 'utf8' });

    // Listen for 'data' events to read chunks of data
    readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    });

    // Handle the 'end' event when reading is complete
    readableStream.on('end', () => {
    console.log('Finished reading the file.');
    });

    // Handle errors
    readableStream.on('error', (err) => {
    console.error('Error reading the file:', err.message);
    });
    const msg = 'Hello World'
    res.send(msg)
})

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running up on PORT: ${PORT}`));
