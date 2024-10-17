import React, { createContext, useState, useEffect } from "react";
import { productsRandom } from "../../services/products/products.service";
export const ProductsRandomContext = createContext();
export const ProductsRandomContextProvider = ({ children }) => {
  useEffect(() => {
    productsRandom()
      .then((result) => {
        setProducts(result);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);

  const [isLoadingB, setIsLoading] = useState(false);
  const [errorB, setError] = useState(false);

  const [productsC, setProducts] = useState([]);
  return (
    <ProductsRandomContext.Provider value={{ isLoadingB, productsC }}>
      {children}
    </ProductsRandomContext.Provider>
  );
};