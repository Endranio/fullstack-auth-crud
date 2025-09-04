import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().min(6),
});
export type ProductDTO = z.infer<typeof ProductSchema>;
export const DeleteSchema = z.object({
  id: z.string().uuid().optional(),

});

export type DeleteDTO = z.infer<typeof DeleteSchema>;
