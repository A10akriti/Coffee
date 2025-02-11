// const AuthRoutes = require("./authRoutes")

// const Routes = require ("express").Router();

// Routes.use ("/auth" , AuthRoutes);

// module.exports = Routes;

const AuthRoutes = require("./authRoutes");
const BookingRoutes = require("./bookingRoutes");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);
Routes.use ("/booking" , BookingRoutes);


module.exports = Routes;