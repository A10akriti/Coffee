const express = require('express');
const fileMiddleware = require('../Src/middleware/fileMiddleware');
const blogCtrl = require("../Src/controller/blog.controller");
const BlogRoutes = express.Router();

BlogRoutes.post("/createblog", fileMiddleware([{ name: 'image', maxCount: 1 }], 'blogs'), blogCtrl.createBlog);
BlogRoutes.get("/getallblogs", blogCtrl.getAllBlogs);
BlogRoutes.get("/getblog/:id", blogCtrl.getBlogById);
BlogRoutes.put("/updateblog/:id", fileMiddleware([{ name: 'image', maxCount: 1 }], 'blogs'), blogCtrl.updateBlog);
BlogRoutes.delete("/deleteblog/:id", blogCtrl.deleteBlog);

module.exports = BlogRoutes;
