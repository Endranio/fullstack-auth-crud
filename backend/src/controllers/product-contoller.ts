import { NextFunction, Request, Response } from "express";
import { prisma } from "../libs/prisma";
import { ProductSchema } from "../schema/product-schema";
import productService from "../services/product-service";

class ProductController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = (req as any).user;
      const body = req.body;

      const validated = await ProductSchema.validateAsync(body);
      await productService.addProduct(id, validated);

      res.status(200).json({
        message: "Product added",
      });
    } catch (error) {
      next(error);
    }
  }

  async editProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const body = req.body;

      const validated = await ProductSchema.validateAsync(body);
      await productService.editProduct(id, validated);

      res.status(200).json({
        message: "Product edited",
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const take = parseInt(req.query.take as string) || 10;
      const skip = (page - 1) * take;
      const products = await productService.getAllProduct(skip, take);
      res.status(200).json({
        message: "Product fetched",
        data: { products },
      });
    } catch (error) {
      next(error);
    }
  }

  async getProductByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = (req as any).user;
      const page = parseInt(req.query.page as string) || 1;
      const take = parseInt(req.query.take as string) || 10;
      const skip = (page - 1) * take;
      const products = await productService.getProductByUserId(id, skip, take);

      res.status(200).json({
        message: "Product fetched",
        data: { products },
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await productService.deleteProduct(id);
      res.status(200).json({
        message: "Product deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
