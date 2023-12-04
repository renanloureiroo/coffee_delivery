import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";

export const useProducts = () => {
  const context = useContext(ProductsContext);

  return context;
};
