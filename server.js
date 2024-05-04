const express = require('express');
const app = express();

const path = require('path');

const server = require('http').createServer(app);

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname+"/src")));

server.listen(PORT);