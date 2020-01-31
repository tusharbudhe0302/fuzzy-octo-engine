'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const api_port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(`Middleware get called`);
    next();
})
app.get('/api/hello', (req, res, next) => {
    res.send('Hello');
});

app.get('/api/v2/worldbank', (req, res, next) => {
    let filedata = fs.readFileSync('../data/sample.json');
    res.send(filedata);
});

app.listen(api_port, () => {
    console.log(`app is listinging on port : ${api_port}`);
})