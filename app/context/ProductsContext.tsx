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
  myCart: MyCart[];
  getProductsById: (id: string) => Product | undefined;
  addProductMyCart: (id: string, quantity: number, size: string) => void;
  deleteProductMyCart: (id: string) => void;
  updateProductMyCard: (data: MyCart) => void;
  getQuantityItems: () => number;
};

type MyCart = {
  productId: string;
  size: string;
  quantity: number;
};

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextData);

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const products = coffees as Product[];
  const tags = ["tradicional", "doce", "especial"] as CoffeeType[];
  const [myCart, setMyCart] = useState<MyCart[]>([]);

  const getProductsById = useCallback((id: string) => {
    return products.find((product) => product.id === id);
  }, []);

  const addProductMyCart = useCallback(
    (id: string, quantity: number, size: string) => {
      const productAlreadyExistsInCart = myCart.findIndex(
        (item) => item.productId === id
      );

      if (productAlreadyExistsInCart >= 0) {
        let product = myCart[productAlreadyExistsInCart];
        product = {
          productId: id,
          quantity: product.quantity + quantity,
          size,
        };

        const updateCart = [...myCart];
        updateCart[productAlreadyExistsInCart] = product;

        setMyCart(updateCart);
      }

      setMyCart((s) => [
        ...s,
        {
          productId: id,
          quantity,
          size,
        },
      ]);
    },
    [myCart]
  );

  const deleteProductMyCart = useCallback(
    (id: string) => {
      const updatedCart = myCart.filter((item) => item.productId !== id);

      setMyCart(updatedCart);
    },
    [myCart]
  );

  const updateProductMyCard = useCallback(
    (data: MyCart) => {
      const findIndex = myCart.findIndex(
        (item) => item.productId === data.productId
      );

      if (findIndex !== -1) {
        const updatedState = [...myCart];

        updatedState[findIndex] = data;
        setMyCart(updatedState);
      }
    },
    [myCart]
  );

  const getQuantityItems = useCallback(() => {
    return myCart.length;
  }, [myCart]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        tags,
        myCart,
        getProductsById,
        addProductMyCart,
        deleteProductMyCart,
        updateProductMyCard,
        getQuantityItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
