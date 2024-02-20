const express = require("express");
const router = express.Router();
const {
  updateProduct,
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/product.controller");

// Routes

// route to create a new product
router.post("/", createProduct);

// route to get all products
router.get("/", getProducts);

// route to get a particular product
router.get("/:id", getProduct);

// route to update a product
router.put("/:id", updateProduct);

// router to delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
