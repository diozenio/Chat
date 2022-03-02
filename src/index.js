const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + "/views/register.html");
})


require('./controllers/register')(app);
require('./controllers/login')(app);

app.listen(3000, ()=> {
    console.log("Servidor sendo executado em: http://localhost:3000/");
});