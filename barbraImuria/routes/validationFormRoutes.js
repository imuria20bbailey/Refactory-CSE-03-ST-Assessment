
//introduce express
const express = require('express');

//accessing the router function in express
const router = express.Router();

//importing the model name
const Application = require('../models/validation');

//creating the route to get the form
router.get('/form', (req, res) => {
    res.render('./validationForm');
 });

 //creating the post route
router.post('/add-form', async(req, res) => {
    try {
        const studentForm = new Application(req.body) //the contact here is the model name
        await studentForm.save();
        console.log(req.body);
        res.redirect('validationForm')  
    } catch (error) { console.log(error);
        
    }
});

//exporting
module.exports = router;