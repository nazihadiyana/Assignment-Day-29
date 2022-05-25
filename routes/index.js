const express = require("express");
const productRoute = require("../controller/product.controller");
const productCategoryRoute = require("../controller/productCategory.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Product
router.get("/product", productRoute.listProduct);
router.get("/product/:id", productRoute.detailProduct);
router.post("/product", productRoute.insertProduct);
router.put("/product/:id", productRoute.updateProduct);
router.delete("/product/:id", productRoute.deleteProduct);

// Product Category
router.get("/productCategory", productCategoryRoute.listProductCategory);
router.get("/productCategory/:id", productCategoryRoute.detailProductCategory);
router.post("/productCategory", productCategoryRoute.insertProductCategory);
router.put("/productCategory/:id", productCategoryRoute.updateProductCategory);
router.delete("/productCategory/:id", productCategoryRoute.deleteProductCategory);

module.exports = router;
