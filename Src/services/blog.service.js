const BlogModel = require("../model/blogModel");
const Joi = require('joi');

class BlogService {
  blogValidation = async (data) => {
    const rules = Joi.object({
      title: Joi.string().required(),
      author: Joi.string().required(),
      content: Joi.string().required(),
      image: Joi.string().uri().required(),
    });
    return await rules.validateAsync(data);
  };

  createBlog = async (data) => {
    const response = new BlogModel(data);
    return await response.save();
  };

  getAllBlogs = async () => {
    return await BlogModel.find();
  };

  getBlogById = async (id) => {
    return await BlogModel.findById(id);
  };

  updateBlog = async (id, data) => {
    return await BlogModel.findByIdAndUpdate(id, data, { new: true });
  };

  deleteBlog = async (id) => {
    return await BlogModel.findByIdAndDelete(id);
  };
}

module.exports = new BlogService();
