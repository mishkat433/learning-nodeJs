 const http = require("http");
 const { hostname } = require("os");
 const port = 3000;
 const localhost= "127.0.0.1"
 
 const myServer = http.createServer((req,res)=>{
     res.end("Hello i am your first server")
 });

 myServer.listen(port,localhost,()=>{
     console.log(`Server is running at http://${localhost}:${port}`);
 })