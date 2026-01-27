// const http = require('http');

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello from home page ');  // + "Heyy " + req.query.name + " you are " + req.query.age
});
app.get('/about',(req,res)=>{
    return res.send(`Heyy ${req.query.name}`);
});

app.listen(8000,()=> console.log(`Server started! http://localhost:8000`));

// const server = http.createServer(app);

// server.listen(8000,()=> console.log(`Server started! http://localhost:8000`));