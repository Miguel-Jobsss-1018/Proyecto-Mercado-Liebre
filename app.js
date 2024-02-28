const express = require("express");
const path = require("path");
const app = express();  

const publicFolderPath = path.resolve(__dirname,'./public');
app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Probando servidor ${port}`);
});

app.get('/', (req, res) =>{
res.sendFile(path.resolve(__dirname,'./views/home.html'))
}); 

app.post('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.post('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});