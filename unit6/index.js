const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName= "127.0.0.1";

const myserver = http.createServer((req, res)=>{

    const handleReadFile = (fileName, statusCode)=>{
    fs.readFile(fileName, (err, data) => {
        res.writeHead(statusCode, { "content-type": "text/html" });
        res.write(data);
        res.end()
    })
}
    if(req.url=== "/"){
        handleReadFile("./file/index.html", 202)
    }
    else if (req.url === "/about") {
        handleReadFile("./file/about.html",202)
    }
    else if (req.url === "/contact") {
        handleReadFile("./file/contact.html",202)
    }
    else{
        handleReadFile("./file/error.html",404)
    }
    
})

myserver.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})