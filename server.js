/*const express = require('express');
const { resolve } = require('path');

const app = express();

app.use('/', express.static(resolve(__dirname, './build')));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Tudo funcionando');
});
*/
const express = require('express');

const app = express();

app.use(express.static('build'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'build/'})
);

app.listen(process.env.PORT || 8080);
