const express = require("express");
const cors = require("cors");
const Routes = require("./routes");
const { MulterError } = require("multer");
const app = express();
require("./config/database.config");
require("dotenv").config(); 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended:true
  }));
  
app.use(Routes);

app.use((req, res, next) => {
  next({
    data: "Data not found",
    msg: "Page not found",
    code: 404,
    meta: null,
  });
});

app.use((error, req, res, next) => {
  const data = JSON.stringify(error.data) || "data not found";
  const msg = error.msg || "Resource not found";
  const statusCode = error.code || 500;

  if (error instanceof MulterError) {
    return res.status(statusCode).json({
      data: data,
      msg: "multer error",
      code: statusCode,
      meta: null,
    });
  }

  res.status(statusCode).json({
    data: data,
    msg: msg,
    code: statusCode,
    meta: null,
  });
});

app.listen(3004, "localhost", (err) => {
  if (err) {
    console.log("Error while listening server", err);
  } else {
    console.log("Server is listening to port ", 3004);
    console.log("Press Ctrl + C to Disconnect server");
  }
});