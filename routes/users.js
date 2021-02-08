const express = require('express');
const router =express.Router();
const bcrypt = require('bcryptjs');
//user model
const User = require('../models/User');

//login page
router.get('/login',(req,res)=> res.render('Login'));

//register page
router.get('/register',(req,res)=> res.render('Register'));

//Register Handle
router.post('/register',(req,res) => {
    const{name,email,password,password2 } = req.body;
    let errors =[];

    //check required fields

    if(!name || !email || !password || !password2 )
    {
        errors.push({ msg: 'Please fill in all fields'});
    }

    //check passwords match
    if(password !== password2)
    {
        errors.push({mag: 'Passwords do not match'});
    }

    //check password length
    if(password.length < 6)
    {
        errors.push({msg: 'Password should be atleast 6 characters long'});
    }

    if(errors.length >0)
    {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }
    else
    {
        //validation passed
        User.findOne({email: email})
        .then(user => {
            if(user) {
                //user exists
                errors.push({msg:'Email is already registered'})
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            }
            else{
                const newUser = new User ({
                    name,
                    email,
                    password
                });
                console.log(newUser);
                res.send('hello');
            }
        });

    }

});

module.exports = router;
