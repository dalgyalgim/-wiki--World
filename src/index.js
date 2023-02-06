const { response, application } = require("express");
const express = require("express");
const cookieParser= require('cookie-parser');
const session = require("express-session");

const app = express();
const PORT = 3001;

require("./database");

// Middlewares
// ***********************************
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
  secret : "ajifjsoijfiosfjosd", 
  resave : false,
  saveUninitialized : false
  })
);

// Routes
// ***********************************
const keywordRoute = require("./routes/keyword");
const relatedRoute = require("./routes/related");


app.use('/api/v1/keyword', keywordRoute);
app.use('/api/v1/related', relatedRoute);


// Listening
// ***********************************
app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));
