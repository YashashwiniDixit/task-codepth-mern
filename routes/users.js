const express = require('express');
const router =express.Router();
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
        res.send=('pass');
    }

});

module.exports = router;
