//ROUTE HANDLERS ARE ACTUALLY THE CONTROLLERS

const Product = require("../models/products");

async function handleNewProduct(req, res) {
  const body = req.body;
  console.log(body);
  const result = await Product.create({
    product: body.product,
    productDescription: body.productDescription,
    price: Number(body.price),
  });

  return res.status(201).json({
    status: "success",
    result,
  });
}

async function handleGetAllProducts(req, res) {
  const result = await Product.find({});
  return res.status(200).json({ status: "success", result });
}

async function handleGetAllActiveProducts(req, res) {
  const result = await Product.find({ status: true });
  return res.status(200).json({ status: "success", result });
}

async function handleGetAllCompletedProducts(req, res) {
  const result = await Product.find({ status: false });
  return res.status(200).json({ status: "success", result });
}

async function handleUpdateProductById(req, res) {
  const editedProduct = req.body;

  const result = await Product.updateOne(
    { _id: req.params.id },
    { $set: editedProduct }
  );

  return res.status(200).json({
    status: "success",
    result,
  });
}

async function handleDeleteById(req, res) {
  try {
    console.log("This is id", req.params.id);
    const deletedProduct = await Product.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }

    return res.status(200).json({ status: "success", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
}
module.exports = {
  handleGetAllProducts,
  handleGetAllActiveProducts,
  handleGetAllCompletedProducts,
  handleUpdateProductById,
  handleDeleteById,
  handleNewProduct,
};
