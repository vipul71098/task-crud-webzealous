const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')


const routes = require('./routes/api/api')

const app = express();

//bodyParser Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//DB config

const db  = require('./config/keys').mongoURI;

//Connect to mongoose

mongoose
	.connect(db,{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true,
    retryWrites: false
})
	.then(() => {
		console.log("MongoDB connected .....")
	})
	.catch((err) => {
		console.log(err)
	})


//Use Routes
app.use('/api/user',routes);



const port = process.env.PORT || 5000;
app.listen(port,() => {console.log("port running at 5000")})