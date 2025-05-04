const prodCtrl = require("../Src/controller/product.controller");
const fileMiddleware = require("../Src/middleware/fileMiddleware");


const ProductRoutes = require("express").Router();

const fields = [
  {
    name: "images",
    maxCount: 5,
  },
];
ProductRoutes.post(
  "/createproduct",
  fileMiddleware(fields, "product"),
  prodCtrl.createProduct
);
ProductRoutes.get("/getallproduct", prodCtrl.getAllProduct);
ProductRoutes.get("/getsingleproduct/:id", prodCtrl.getProductById);
ProductRoutes.put(
  "/updateproduct/:id",
  fileMiddleware(fields, "product"),
  prodCtrl.updateProduct
);
ProductRoutes.delete("/deleteproduct/:id", prodCtrl.deleteProduct);

module.exports = ProductRoutes;
