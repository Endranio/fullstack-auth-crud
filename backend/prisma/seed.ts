import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  // bikin 3 user
  for (let u = 1; u <= 3; u++) {
    const hashedPassword = await bcrypt.hash(`password${u}`, 10);
    const user = await prisma.user.create({
      data: {
        name: `User ${u}`,
        email: `user${u}@example.com`,
        password: hashedPassword,
        gender: u % 2 === 0 ? "Male" : "Female",
      },
    });

    // bikin 20 produk untuk setiap user
    const products = Array.from({ length: 20 }).map((_, i) => ({
      name: `Product ${i + 1} of User ${u}`,
      description: `Description for product ${i + 1} of User ${u}`,
      userId: user.id,
    }));

    await prisma.product.createMany({
      data: products,
    });
  }
}

main()
  .then(async () => {
    console.log("✅ Database has been seeded");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
