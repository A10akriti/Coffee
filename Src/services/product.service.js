const Joi = require("joi");
const productModel = require("../model/productModel");

class productService {
  productValidation = async (data) => {
    try {
      let rules = Joi.object({
        name: Joi.string().required(),
        brand: Joi.string(),
        categories: Joi.string(),
        images: Joi.array().items(Joi.string()),
        price: Joi.number().required(),
        discount: Joi.number().min(0).max(100),
        stock: Joi.number().required().min(0),
        barcodeNo: Joi.number().required(),
        quantity: Joi.number().min(1),
        description: Joi.string().required(),
      });
      let response = await rules.validateAsync(data);
      console.log(response.name);
      
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  createProduct = async (data) => {
    try {
      let response = new productModel(data);
      return await response.save();
    } catch (exception) {
      throw exception;
    }
  };
  getAllProduct = async () => {
    try {
      let response = await productModel.find();
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getProductById = async (id) => {
    try {
      let response = await productModel.findById(id);
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  UpdateProduct = async (id, data) => {
    try {
      let response = await productModel.findByIdAndUpdate(id, data);
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  deleteProduct = async (id) => {
    try {
      let response = await productModel.findByIdAndDelete(id);
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const productSrv = new productService();
module.exports = productSrv;
