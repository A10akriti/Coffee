const productSrv = require("../services/product.service");

class productController {
  createProduct = async (req, res, next) => {
    try {
      let data = req.body;
      let files = req.files;
      console.log(data);
      

      if (!files) {
        throw "image is required";
      } else {
        data.images = files["images"]?.map((items) => items.path);
      }
      // data.categories = Array.isArray(data.categories)
      //   ? data.categories
      //   : [data.categories];
      let validateProd = await productSrv.productValidation(data);
      let response = await productSrv.createProduct(validateProd);

      res.json({
        data: response,
        msg: "Product register Successful",
      });
    } catch (error) {
      console.log("product create error", error);

      next({
        data: "",
        msg: error,
      });
    }
  };

  getAllProduct = async (req, res, next) => {
    try {
      let id = req.params.id;
      let response = await productSrv.getAllProduct(id);
      res.json({
        data: response,
        code: 200,
        msg: "All product fetched",
        meta: null,
      });
    } catch (error) {
      next({
        msg: error,
      });
    }
  };
  getProductById = async (req, res, next) => {
    try {
      let id = req.params.id;
      let response = await productSrv.getProductById(id);
      res.json({
        data: response,
        msg: "product fetched",
      });
    } catch (error) {
      next({
        msg: error,
      });
    }
  };
  updateProduct = async (req, res, next) => {
    try {
      let data = req.body;
      let id = req.params.id;
      let productDetails = await productSrv.getProductById(id);
      if (data.files) {
        data.images = data.files.map((item) => item.filename);
      } else {
        data.images = productDetails.images;
      }
      data.categories = Array.isArray(data.categories)
        ? data.categories
        : [data.categories];
      let validateProduct = await productSrv.productValidation(data);
      let response = await productSrv.UpdateProduct(id, validateProduct);
      res.json({
        data: response,
        msg: "Product Update successfully",
        code: 200,
        meta: null,
      });
    } catch (error) {
      next({
        data: null,
        msg: error,
      });
    }
  };

  deleteProduct = async (req, res, next) => {
    try {
      let response = await productSrv.deleteProduct(req.params.id);
      res.json({
        data: response,
        msg: "Product Deleted successfully",
        code: 200,
        meta: null,
      });
    } catch (error) {
      next({
        data: null,
        msg: error,
      });
    }
  };
}

const prodCtrl = new productController();
module.exports = prodCtrl;
