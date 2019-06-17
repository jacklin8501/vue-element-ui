var express = require('F:\\Program Files\\npm\\node_global_modules\\node_modules\\express\\lib\\express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.use(express.static('./')).listen(80, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})