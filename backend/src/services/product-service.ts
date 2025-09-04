import { ProductDTO } from "../dtos/dto";
import { prisma } from "../libs/prisma";

class ProfuctService {
  async addProduct(userId: string, data: ProductDTO) {
    return await prisma.product.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async editProduct(id: string, data: ProductDTO) {
    return await prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async getAllProduct(skip: number, take: number) {
    return await prisma.product.findMany({
      skip,
      take,
      
    });
  }

  async getProductByUserId(id: string,skip: number, take: number) {
    return await prisma.product.findMany({
      where: {
        userId:id,
      },
      skip,
      take
    });
  }

  async deleteProduct(id: string) {
    return await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}

export default new ProfuctService();
