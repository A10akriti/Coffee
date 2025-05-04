const blogSrv = require("../services/blog.service");



class BlogController {
  createBlog = async (req, res, next) => {
    try {
      const imageUrl = req.files.image[0].path;
      const data = { ...req.body, image: imageUrl };
      const validatedData = await blogSrv.blogValidation(data);
      const response = await blogSrv.createBlog(validatedData);
      res.json({ data: response, msg: "Blog created successfully!" });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  getAllBlogs = async (req, res, next) => {
    try {
      const response = await blogSrv.getAllBlogs();
      res.json({ data: response, msg: "All blogs fetched successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  getBlogById = async (req, res, next) => {
    try {
      const response = await blogSrv.getBlogById(req.params.id);
      res.json({ data: response, msg: "Blog fetched successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  updateBlog = async (req, res, next) => {
    try {
      const imageUrl = req.files ? req.files.image[0].path : req.body.image;
      const updatedData = { ...req.body, image: imageUrl };
      const response = await blogSrv.updateBlog(req.params.id, updatedData);
      res.json({ data: response, msg: "Blog updated successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };

  deleteBlog = async (req, res, next) => {
    try {
      const response = await blogSrv.deleteBlog(req.params.id);
      res.json({ data: response, msg: "Blog deleted successfully." });
    } catch (error) {
      next({ msg: error.message });
    }
  };
}

module.exports = new BlogController();
