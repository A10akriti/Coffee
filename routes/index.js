
const AuthRoutes = require("./authRoutes");
const BlogRoutes = require("./blog.routes");
const BookingRoutes = require("./bookingRoutes");
const DashboardRoutes = require("./dashboardRoutes");
const ProductRoutes = require("./productRoutes");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);
Routes.use ("/booking" , BookingRoutes);
Routes.use ("/dashboard", DashboardRoutes);
Routes.use ("/blog" , BlogRoutes);
Routes.use ("/product" , ProductRoutes);


module.exports = Routes;
