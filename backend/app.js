//QYoqNEnrTgfKCbHv
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

///Routes
const postsRoutes = require("./routes/posts");



const app = express();
app.use(cors());
app.options('*', cors());
///adding body parser so that we can add posts on server
mongoose.connect("mongodb+srv://admin:QYoqNEnrTgfKCbHv@adminconsole.rg6fm.mongodb.net/admin-console?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  })
app.use(bodyParser.json());
app.use("/images", express.static(path.join("backend/images")));
app.use(bodyParser.urlencoded({
  extended: false
}));

///adding headers that are required for communication between servers, and also provide us with methods such as GET, POST..etc


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/posts", postsRoutes);


module.exports = app;
