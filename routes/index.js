// const AuthRoutes = require("./authRoutes")

// const Routes = require ("express").Router();

// Routes.use ("/auth" , AuthRoutes);

// module.exports = Routes;

const AuthRoutes = require("./authRoutes");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);


module.exports = Routes;