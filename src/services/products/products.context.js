import React, { useState, createContext, useEffect, useMemo } from "react";
import { productsRequest } from "../../services/products/products.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReached, setEndReached] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };
  const onEndReached = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };
  useEffect(() => {
    if (keyword.length < 3) {
      // don't do anything
      return;
    }

    productsRequest(keyword.toLowerCase())
      .then((result) => {
        setIsLoading(true);
        setProducts(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        error,
        products,
        search: onSearch,
        keyword,
        EndReached: onEndReached,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
