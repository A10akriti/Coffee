const express = require('express');
const DashboardCtrl = require('../Src/controller/dashboard.controller');
const DashboardRoutes = express.Router();


DashboardRoutes.get("/alldata", DashboardCtrl.getAlldata);

module.exports = DashboardRoutes;
