import React, { createContext, useState, useEffect } from "react";
import { productsFiveStars } from "../../services/products/products.service";
export const BannerContext = createContext();

export const BannerContextProvider = ({ children }) => {
  useEffect(() => {
    productsFiveStars()
      .then((result) => {
        setProducts(result);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);
  const [productsB, setProducts] = useState([]);
  const [isLoadingB, setIsLoading] = useState(false);
  const [errorB, setError] = useState(false);
  return (
    <BannerContext.Provider value={{ isLoadingB, productsB, errorB }}>
      {children}
    </BannerContext.Provider>
  );
};
