
const BlogModel = require("../model/blogModel"); 
const blogCtrl = require("./blog.controller"); 

class DashboardController {
  getAlldata = async (req, res, next) => {
    try {
     
      const allBlogs = await BlogModel.find();

      res.json({
        data: {
          allBlogs
        },
        msg: "All data fetched successfully",
      });
    } catch (error) {
      next({
        msg: error.message,
      });
    }
  };
}

const DashboardCtrl = new DashboardController();
module.exports = DashboardCtrl;
