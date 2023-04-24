import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getPlant() {
  return [
    {
      id: `3dc1d9e0-49b5-4f1e-8b59-b6b4e4594b76`,
      title: `Sango Palm`,
      price: `350`,
      description: `Seller's choice - each plant is unique and may vary from the example in the photo. Photos show the quality and size of plant you can expect. `,
    },
    {
      id: `850666bb-8f38-4dcc-927c-148c17be6901`,
      title: `ZZ Plant`,
      price: `250`,
      description: `Seller's choice - each plant is unique and may vary from the example in the photo. Photos show the quality and size of plant you can expect. `,
    },
    {
      id: `d1f42027-bf51-404d-b123-392fae9795a8`,
      title: `Air Plant`,
      price: `200`,
      description: `Gorgeous and huge Philodendron White Princess in 8\` pot! Listing is for the exact plant shown.`,
    },
    {
      id: `df468ec2-02ae-4320-b7ef-7b37757beee6`,
      title: `Monstera`,
      price: `75`,
      description: `Water once per week and give bright indirect light for best growing results.`,
    },
  ];
}


function getImages() {
  return [
    {
      id: `261c0d23-148c-4207-bce8-7f1ccd255067`,
      img: `image2`,
      productId: `d1f42027-bf51-404d-b123-392fae9795a8`,
    },
    {
      id: `266f46bb-2e5b-479b-8254-f7a15e9948a0`,
      img: `image5`,
      productId: `3dc1d9e0-49b5-4f1e-8b59-b6b4e4594b76`,
    },
    {
      id: `2dab6617-b0e1-422b-a595-d90d6ae3d49a`,
      img: `image2`,
      productId: `3dc1d9e0-49b5-4f1e-8b59-b6b4e4594b76`,
    },
    {
      id: `4bdb4158-f07f-4852-8fd2-fba35e67dce3`,
      img: `image3`,
      productId: `3dc1d9e0-49b5-4f1e-8b59-b6b4e4594b76`,
    },
    {
      id: `4e59e492-2de5-46f7-ab1e-4b979fc9e914`,
      img: `image1`,
      productId: `850666bb-8f38-4dcc-927c-148c17be6901`,
    },
    {
      id: `5d6758ac-512d-4d4b-b7ab-e9cf890ed3d1`,
      img: `image1`,
      productId: `d1f42027-bf51-404d-b123-392fae9795a8`,
    },
    {
      id: `6e6d2b74-4f4c-4815-bee5-9ae95f29726f`,
      img: `image2`,
      productId: `850666bb-8f38-4dcc-927c-148c17be6901`,
    },
    {
      id: `771d40f1-f6e4-4147-9fcd-f380351963c6`,
      img: `image1`,
      productId: `df468ec2-02ae-4320-b7ef-7b37757beee6`,
    },
    {
      id: `c21cd954-0bcc-4571-b974-bb948611693a`,
      img: `image4`,
      productId: `3dc1d9e0-49b5-4f1e-8b59-b6b4e4594b76`,
    },
    {
      id: `cab1b264-5a0d-43f8-9d05-6f1223eaa5d0`,
      img: `image3`,
      productId: `850666bb-8f38-4dcc-927c-148c17be6901`,
    },
    {
      id: `eca83bc7-73d9-4557-b41a-5a148cc373ad`,
      img: `image1`,
      productId: `3dc1d9e0-49b5-4f1e-8b59-b6b4e4594b76`,
    },
  ];
}

async function seed() {
  await Promise.all(
    getPlant().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getImages().map(({ ...orderData }) => {
      return db.images.create({
        data: {
          ...orderData,
        },
      });
    }),
  );
}

seed();
