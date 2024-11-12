import React, { createContext, useState, useEffect, useRef } from "react";

export const PedidosContext = createContext();
import { PedidosToday } from "../cart/cart.service";
export const PedidosContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pedidos, setPedidos] = useState(() => []);
  useEffect(() => {
    getPedidosbyDate();
  }, []);

  const getPedidosbyDate = async () => {
    setIsLoading(true);
    try {
      await PedidosToday("cart").then((pedidos) => {
        setPedidos(pedidos);
        setIsLoading(false);
      });

      //return documents; // Replace with your collection name
    } catch (error) {
      console.error("Error in component: ", error);
    } finally {
    }
  };

  return (
    <PedidosContext.Provider
      value={{
        isLoading,
        setIsLoading: setIsLoading,
        pedidos,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};