interface IProduct {
  id: number;
  categoryId: number;
  title: string;
  price: number;
  image: string;
  colorsId: number[];
}

const products: IProduct[] = [
  {
    id: 1,
    categoryId: 4,
    title: "Радионяня Motorola MBP16",
    price: 3690,
    image: "/img/radio.jpg",
    colorsId: [1, 3],
  },
  {
    id: 2,
    categoryId: 1,
    title: "Ультразвуковая зубная щётка Playbrush Smart Sonicv",
    price: 5660,
    image: "/img/toothbrush.jpg",
    colorsId: [1, 2],
  },
  {
    id: 3,
    categoryId: 2,
    title: "Смартфон Xiaomi Mi Mix 3 6/128GB",
    price: 21790,
    image: "/img/phone.jpg",
    colorsId: [2, 3],
  },
  {
    id: 4,
    categoryId: 3,
    title: "Электроскейт Razor Cruiser",
    price: 24690,
    image: "/img/board.jpg",
    colorsId: [4, 5, 6],
  },
  {
    id: 5,
    categoryId: 2,
    title: "Смартфон Xiaomi Mi A3 4/64GB Android One",
    price: 14960,
    image: "/img/phone-2.jpg",
    colorsId: [4, 2, 6],
  },
  {
    id: 6,
    categoryId: 2,
    title: "Смартфон Xiaomi Redmi 6/128GB",
    price: 8960,
    image: "/img/phone-3.jpg",
    colorsId: [6],
  },
  {
    id: 7,
    categoryId: 3,
    title: "Электрический дрифт-карт Razor Crazy Cart",
    price: 39900,
    image: "/img/bicycle.jpg",
    colorsId: [7],
  },
];

export default products;
export type { IProduct };
