export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[] | [];
  description: string;
}

export interface Order {
  id: string;
  products: { quantity: number; productId: string }[];
  firstName: string;
  lastName: string;
  adress: string;
  clientNotes: string;
}

type DBData = {
  products: Product[];
  orders: Order[];
};

export const db: DBData = {
  products: [
    {
      id: `c5ec02c0-60c0-4a67-9614-6e64e8f7d343`,
      title: `Roślina 1`,
      price: 100,
      images: [`image/Roślina 1/image1`, `image/Roślina 1/image2`],
      description: `Opis Rośliny 1`,
    },
    {
      id: `4b2db7a8-00e7-4099-959d-30d846c9de08`,
      title: `Roślina 2`,
      price: 150,
      images: [`image/Roślina 2/image1`, `image/Roślina 2/image2`],
      description: `Opis Rośliny 2`,
    },
    {
      id: `105224b7-9f2f-4a22-9e5f-fd4cd831af9e`,
      title: `Roślina 3`,
      price: 70,
      images: [`image/Roślina 3/image1`, `image/Roślina 1/image2`],
      description: `Opis Rośliny 3`,
    },
  ],
  orders: [
    {
      id: `1`,
      products: [
        { quantity: 2, productId: `1` },
        { quantity: 1, productId: `3` },
      ],
      firstName: `Mikołaj`,
      lastName: `Chojnacki`,
      adress: `Jaworzyna Śląska`,
      clientNotes: `Info od klienta`,
    },
  ],
};
