import {Product, User} from "@prisma/client"

export type RegisterDTO = Pick<User,"name"|"email"|"password"|"gender">
export type LoginDTO = Pick<User,"email"|"password">
export type ProductDTO = Pick<Product,"name"|"description">
