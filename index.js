const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {X509Certificate,} = require('crypto');
const crypto = require('crypto');
const fs = require('fs')
const app = express();

// /role-group-list
// const key = 'mongodb://localhost:27017/test'
app.use(bodyParser.json());

const Test = require('./controller/Js interview/test');
// require('./controller/Js interview/opq');
// require('./controller/Js interview/codingQ');

// app.use('/api', walletRoutes);
// app.use('/api/transactions', transactionRoutes);

app.get('/test', (req, res, next) => {
    const msg = 'Hello World'
    res.send(msg)
})

// Server is running up...
app.listen(8000);
