const express = require("express");
const {
  handleGetAllProducts,

  handleUpdateProductById,
  handleDeleteById,
  handleNewProduct,
} = require("../controllers/products");
const router = express.Router();

// GET AND POST REQUESTS

router.route("/").get(handleGetAllProducts).post(handleNewProduct);

//PATCH REQUESTS AND DELETE REQUESTS HANDLING

router.route("/:id").patch(handleUpdateProductById).delete(handleDeleteById);

module.exports = router;
