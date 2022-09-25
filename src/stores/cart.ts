import products from "@/data/products";
import { defineStore } from "pinia";

export interface ICartProduct {
  id: number;
  amount: number;
}

interface ICartStore {
  products: ICartProduct[];
}

export const useCartStore = defineStore({
  id: "cart",
  state: (): ICartStore => ({
    products: [],
  }),
  getters: {
    cartDetailsProducts(state) {
      return state.products.map((item) => ({
        ...item,
        product: products.find((product) => item.id === product.id),
      }));
    },
    cartTotalPrice(): number {
      return this.cartDetailsProducts.reduce(
        (acc, item) => acc + (item.product?.price || 0) * item.amount,
        0
      );
    },
  },
  actions: {
    addProduct(id: number, amount: number) {
      const product = this.products.find((item) => item.id === id);
      if (product) {
        product.amount += amount > 0 ? amount : 0;
      } else {
        this.products.push({ id, amount });
      }
    },
    updateProductAmount(id: number, amount: number) {
      const product = this.products.find((item) => item.id === id);
      if (product) {
        product.amount = amount > 0 ? amount : 1;
      }
    },
    deleteProduct(id: number) {
      this.products = this.products.filter((item) => item.id !== id);
    },
  },
});
