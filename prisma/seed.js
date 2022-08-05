const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { faker } = require("@faker-js/faker");

const goods = [...new Array(100)].map(() => ({
  name: faker.random.words(4),
  discount: Number(faker.random.numeric(2)),
  price: Number(faker.random.numeric(5)),
  description: faker.random.words(150),
}));

const categories  = [...new Array(10)].map(() => ({
  name: faker.random.words(4),
}));

async function generateImage() {
 return await prisma.file.create(
      {
        data: {
          originalFilename: faker.random.words(4),
          mimetype: "image/png",
          filename: faker.random.words(10),
          path: faker.image.imageUrl(300, 300, null, true),
          url: faker.image.imageUrl(300, 300, null, true),
          size: 234,
        }
      }
  )
}

async function seedGoods(categoriesIds) {
  console.log("Start seeding goods");
  const [id] = categoriesIds;

  for (const good of goods) {
    const u = {
      ...good,
      category: {
        connect: { id },
      },
      photo: {
        create: {
          originalFilename: faker.random.words(4),
          mimetype: "image/png",
          filename: faker.random.words(10),
          path: faker.image.imageUrl(300, 300),
          url: faker.image.imageUrl(300, 300, null, true),
          size: 234,
        }
      }
    };

    const newGood = await prisma.good.create({
      data: u,
    });
    console.log(`Created user with id: ${newGood.id}`);
  }
}

async function seedCategories() {
  console.log("start seeding categories");
  const categoriesIds = [];

  for (const u of categories) {
    const photo = await generateImage()
    const category = await prisma.category.create({
      data: {
        ...u,
        photoId: photo.id
      },
    });

    categoriesIds.push(category.id);
    console.log(`Created user with id: ${category.id}`);
  }
  console.log("categories seeding end");
  return categoriesIds;
}

async function main() {
  console.log(`Start seeding ...`);

  await prisma.good.deleteMany()
  await prisma.category.deleteMany()
  await prisma.file.deleteMany()

  const categoriesIds = await seedCategories();
  await seedGoods(categoriesIds);


  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
