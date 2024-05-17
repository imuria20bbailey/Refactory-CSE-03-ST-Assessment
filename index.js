//dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const port = 3500

//importing routes
const validationFormRoutes = require('./barbraImuria/routes/validationFormRoutes');


//instantiations
const app = express();

//configurations for mongo
mongoose.connect(process.env.DATABASE,{
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
});

mongoose.connection
.once('open', () => {
    console.log('Mongoose connection open');
})
.on('error', err => {
    console.error(`Connection error: ${err.message}`)
});


app.set('view engine', 'pug'); //set the view engine to path
app.set('views', path.join(__dirname, 'barbraImuria/views')); //specify the directorate where the views are found

//middleware/ helps pick information to post
app.use(express.static(path.join(__dirname, 'barbraImuria/public')))  //set directorate for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//use imported routes
app.use('/', validationFormRoutes)







//for invalid routes
app.get('*', (req, res) => {
    res.send('400! This is invalid URL.');
});
//boostrapping the server
app.listen(port, () => console.log(`listening on port ${port}`));