var createError = require('http-errors');
require("dotenv").config({ path: ".env" });
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/error')

const bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.options('*', cors());
var mongoDB = 'mongodb://mongo:27017/myDB';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = require('bluebird');
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error:');
  console.log("Trying again to connect........");
  setTimeout(()=>{
    mongoose.connect(mongoDB);
  }, 1000);
  
});

db.on('connected', function() {
  //isConnectedBefore = true;
  console.log('======>Connection established to MongoDB<=======');
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header(
      "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept",
  );
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, UPDATE, DELETE, PATCH');
      return res.status(200).json({})
  }
  next()
});
app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
// error handler
app.use(errorHandler);


// const server = app.listen(PORT, () =>
//   console.log(`Sever running on port ${PORT}`)
// );

// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Logged Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });
module.exports = app;
