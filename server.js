//These are third party module
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');
let path = require('path');
let mongoose = require('mongoose');

//These are user defined modules
let config = require('./config/config.js');
let instituteRoute = require('./backEnd/institute/instituteRoute');
let studentRoute = require('./backEnd/student/studentRoute');

//This is for  initializing the express application
let app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

//This is for redirecting the request to particular routes
app.use('/student',studentRoute);
 app.use('/institute',instituteRoute);



//this is for connecting the frontEnd and backEnd
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//it is error handling module
app.use((data,req, res, next) => {
    const error = new Error(data);
    error.status = 404;
    next(error);
});


//This is for starting the server
app.listen(config.port, (err)=>{
    if(err){
        console.log('Error occur in starting the server');
    }else{
        console.log('Server started at port '+config.port);
    }
});

mongoose.connect(config.database);
mongoose.connection.on('connected', function(err){
    if(err) console.log('Not connected to DB');
    else console.log('Connected to DB at port 27017');
})