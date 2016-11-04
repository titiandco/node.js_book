
/* just 1 prog to create a server on localhost and counting request
each time there is a new connection , refreshing for instance the page */

var http = require('http');
console.log("start server");
var counter = 1;
http.createServer(function (req,res){
	console.log("new request number"+counter,counter++);
	res.end("<h1>hello world</h1>");


}).listen(4242);
