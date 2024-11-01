import React, { useState, createContext, useEffect } from "react";
import {
  productsRequest,
  productsFiveStars,
} from "../../services/products/products.service";

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
    setKeyword(searchKeyword);
  };
  useEffect(() => {
    if (keyword.length == 0) {
      setIsLoading(false);
      return;
    }

    productsRequest(keyword.toLowerCase())
      .then((result) => {
        setProducts(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
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
