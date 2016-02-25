var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.prod');

var app = express();
var compiler = webpack(config);

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/static/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/bundle.js'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
