import joi from "joi";
import { ProductDTO } from "../dtos/dto";

const ProductSchema = joi.object<ProductDTO>({
  name: joi.string().required(),
  description: joi.string().required(),
});

export { ProductSchema };
