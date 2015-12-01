'use strict';

const PORT = 9000;

let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/node_modules/node-forge', express.static(__dirname + '/node_modules/node-forge'));

app.listen(PORT);

console.log('Listening on port', PORT);
