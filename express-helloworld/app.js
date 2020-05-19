var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/login', function (req, req) {
  res.sendFile('/login.html', {root:__dirname})
 }),

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

