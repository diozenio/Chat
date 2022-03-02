const express = require('express');

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

app.post('/', (req, res)=>{
    res.send("Funcionou")
})

require('./controllers/authController')(app);

app.listen(3000, ()=> {
    console.log("Servidor sendo executado em: http://localhost:3000/");
});