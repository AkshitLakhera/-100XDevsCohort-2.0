// this data base i had made for practice

const express = require('express');
// Create an instance of the express application
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://admin:Vihaan12%40@cluster0.jpfavz7.mongodb.net/');
const User = mongoose.model('Users',{name:String,email :String , password:String , });
app.post("/signup",  async function(req,res){
 const username = req.body.username;
 const password = req.body.password;
 const name    = req.body.name;
 const existinguser = await User.findOne({email:username});
 if (existinguser){
    return res.status(400).send("Username  already exists");
 }
 const user = new User ({
    name:name,
    email:username,
    password:password

 })
 user.save();
 res.json({
    "msg": 'User created successfully'
 })
})
app.listen(3000,()=> {
    console.log("Server get hosted in port 3000")
})