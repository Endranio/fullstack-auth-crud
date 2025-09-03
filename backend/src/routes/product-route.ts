import express from "express";
import productController from "../controllers/product-contoller";

const router = express.Router();

router.post("/", productController.addProduct);
router.patch("/:id", productController.editProduct);
router.get("/", productController.getAllProduct);
router.get("/user", productController.getProductByUserId);
router.delete("/:id", productController.deleteProduct);


export default router;