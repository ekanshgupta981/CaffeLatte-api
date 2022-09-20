const express = require("express");
const router = express.Router();
const paymentController = require("../controller/paymentController");
const productController = require("../controller/productController");

router.post("/add-products", productController.addProducts);
router.get("/get-products", productController.getProducts);
router.get("/get-product-by-id/:id", productController.getProductByID);

// payment routes
router.post("/payment", paymentController.payment); // react
router.post("/callback", paymentController.callback); // react

module.exports = router;

// react//
