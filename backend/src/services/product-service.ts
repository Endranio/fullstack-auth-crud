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
}

export default new ProfuctService();
