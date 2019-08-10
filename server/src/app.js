const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const normalizePort = require('normalize-port');
const app = express();

const port = normalizePort(process.env.Port || '8801');

app.get('/', function(req, res) {
  res.send('Hello World!');
})



app.listen(port, () => console.log(`app listening on port ${port}`))