import { coffees } from "../data/coffees";
import { FC, createContext, useCallback, useState } from "react";
import { ImageSourcePropType } from "react-native";

type CoffeeType = "tradicional" | "doce" | "especial";

export type Product = {
  id: string;
  type: "tradicional" | "doce" | "especial";
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

type ProductsContextData = {
  products: Product[];
  tags: CoffeeType[];

  getProductsById: (id: string) => Product | undefined;
};

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextData);

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const products = coffees as Product[];
  const tags = ["tradicional", "doce", "especial"] as CoffeeType[];

  const getProductsById = useCallback((id: string) => {
    return products.find((product) => product.id === id);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, tags, getProductsById }}>
      {children}
    </ProductsContext.Provider>
  );
};
