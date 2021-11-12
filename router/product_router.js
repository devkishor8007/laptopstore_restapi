const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getStaticProduct,
  deleteproduct,
  getOneProduct,
  updateProduct,
  createProduct,
} = require("../controller/product_controller");

router.get("/", getAllProduct);
router.get("/static", getStaticProduct);
router.get("/:id", getOneProduct);
router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteproduct);
module.exports = router;
