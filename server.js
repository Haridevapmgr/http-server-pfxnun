var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http
  .createServer(function (req, res) {
    if (req.url == '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<form action="biodata" method="post" enctype="multipart/form-data">'
      );
      res.write('<h1>TASK</h1>');
      res.write('Firstname <input type="text" name ="Firstname"><br><br>');
      res.write('Lastname <input type="text" name ="Lastname"><br><br>');
      res.write('Email <input type="text" name ="Email"><br><br>');
      res.write('<input type="submit">');
      res.end();
    } else if (req.url == '/biodata') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields) {
        res.write('<h1>Firstname:' + fields.Firstname + '</h1><br>');
        res.write('<h1>Lastname:' + fields.Lastname + '</h1><br>');
        res.write('<h1>Email:' + fields.Email + '</h1><br>');
        res.end('<h1>your details can be addding successfully</h1>');
      });
    } else {
      res.end('<h1>404 PAGE NOT FOUND</h1>');
    }
  })
  .listen(8080);
