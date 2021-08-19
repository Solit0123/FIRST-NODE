//this is a single-line javascript comment

//defina a variable and place into it the http package (shared code) from node.js 
let myhttp = require("http");

//use dot notaion in js to acess an obj and its methods(commandsfunction) properties

//create server takes some arguments to make it provide a usefull http server
//1: function that wil be run when the server recieves an http request
let myserver = myhttp.createServer(

//when a req comes it runs
  function(request,response){

console.log(request.url);

//cretes http response header, including the status code (200ok), content type
response.writeHead(200, {"Content-Type": "text/plain"} );


//end returns some data and closes the response (sends it)

response.end("this is my text response.end");
  }


);


//ask http to start listening on a tcp port for incoming http requests
//listen takes 2arguments. 1: tcp port number and 2: string of ip address to listen (0.0.0.0 for repl.it)
myserver.listen(8080, "0.0.0.0");

console.log("server has started");