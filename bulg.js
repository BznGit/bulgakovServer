const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');

server.listen(9000, ()=>console.log("EAscan server started on port: 9000"));
app.use(express.static('./dist')); 

