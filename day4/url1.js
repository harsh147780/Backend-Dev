const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res) =>{
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    
    const timestamp = new Date().toISOString();
    const log= `${timestamp} : ${req.url} \n`;
    fs.appendFile('log.txt' , log , (err,data) =>{
    switch(req.url){
        case "/" :
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end('You are in a home Page');
            break;
        case "/help":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end('you are in a help page');
            break;
        
        default:
            // res.writeHead(404, { "Content-Type": "application/json" });
            res.end("page not found");
    }})
    
});
const PORT = 8000;
server.listen(PORT, () => console.log(`server is start on http://localhost:${PORT}`));