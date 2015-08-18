var http = require("http");
var express = require('express');
var app = express();

/*app.use(express.static(__dirname +'/View'));
app.use(express.static(__dirname +'/Css'));*/

app.get("/",function(reques,response){
	response.sendfile(__dirname + '/view/index.html');
});
app.get("/style.css",function(reques,response){
	response.sendfile(__dirname + '/css/style.css');
});
app.get("/js/server.js",function(reques,response){
	response.sendfile(__dirname + '/js/server.js');
});
app.get("/texto.txt",function(reques,response){
	response.sendfile(__dirname + '/texto.txt');
});
app.listen(8080);
console.log("Servidor Express escuchando en modo %s", app.settings.env);
/*http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);*/


/*function onRequest(request,response){
	var codigo_html = '<html> <head> <title> Ejemplo de hola mundo </title> </head> <body> Hola mundossss </body> </html>';
	response.writeHead(200,{"COntent-type":"text/html"});
	response.write(codigo_html);
	response.end();
}
http.createServer(onRequest).listen(5451);*/