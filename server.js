const express=require('express');
const app=express();
app.get(
    '/',
    (req,res) => {
        res.send('hello');
    }
)
let PORT = process.env.POT || 5000
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))