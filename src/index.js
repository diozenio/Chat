const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send("OK");
})

require('./controllers/authController')(app);

app.listen(3000);