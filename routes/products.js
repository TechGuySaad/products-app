const express = require("express");
const {
  handleGetAllProducts,
  handleGetAllActiveProducts,
  handleGetAllCompletedProducts,
  handleUpdateProductById,
  handleDeleteById,
  handleNewProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(handleGetAllProducts).post(handleNewProduct);

// GET - ACTIVE TODOS

router.get("/active", handleGetAllActiveProducts);

// GET - COMPLETED TODOS

router.get("/completed", handleGetAllCompletedProducts);

//PATCH REQUESTS AND DELETE REQUESTS HANDLING

router.route("/:id").patch(handleUpdateProductById).delete(handleDeleteById);

module.exports = router;
