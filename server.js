const express = require('express');
const app = express();

const { PORT } = require('./.env/port.js');
const User = require('./index.js');
const createdUser = [];


app.use(express.json());

app.get('/',(req,res)=>{
    res.sendStatus(200)
})
app.post('/user',(req,res)=>{
    const newUser = req.body
    User.names.push(newUser.name)
    createdUser.push(newUser.name)
    res.send(`The ${createdUser} is now registered`)
})


app.listen(PORT,(req,res)=>{
    console.log('Am Good To Go')
    console.log(createdUser)
})