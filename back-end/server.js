const express = require('express');
const connectDB = require('./db/dbConnection');
const cors = require('cors');
const user = require('./db/user');
const User = require('./db/user');
const app = express();
const port = 8000;


// middleware for parsing the json
app.use(express.json());

// Enable Cors
app.use(cors());

// Registration
app.post('/register',async(req,res)=>{
    try {
        const {username,password} = req.body;
        console.log(req.body);
        const user = new User({username,password})
        await user.save();
        res.status(201).json({message:'Registration Sucessfull'});
    } catch (error) {
        res.status(500).json({error:'Registration Failed'});
        console.log(error);
    }
})

// Login

app.post('/login',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if (!user || user.password !== password) {
            return res.status(401).json({error:'Invalid Username or Password'});
        }
        res.status(200).json({message:'Login Successfully'});

    } catch (error) {
        res.status(500).json({error:'Login Failed'});
    }
})

connectDB();

app.listen(port,()=>{
    console.log("Server is listenting on Port 8000");
});