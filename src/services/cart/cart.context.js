import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({
  children,
  id,
  photos,
  quantity,
  price,
}) => {
  const [cart, setCart] = useState(() => []);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const totalProducts = cart.reduce(
      (sum, current) => sum + Number(current.quantity),
      0
    );

    setTotal(
      cart.reduce(
        (sum, current) =>
          sum + Number(current.quantity) * Number(current.price),
        0
      )
    );
    //setTotal(total);
    setCount(totalProducts);
  }, [cart, id, quantity, isLoading]);

  const add = ({ id, photos, quantity, name, price }) => {
    setIsLoading(true);
    const found = cart.find((item) => item.id == id);
    if (found) {
      var item = {
        id,
        photos,
        quantity: Number(found.quantity) + Number(quantity),
        name,
        price,
      };
      cart[cart.findIndex((el) => el.id === item.id)] = item;
      setCart([...cart]);
    } else {
      photos = photos[0];
      const totalItem = Number(quantity) * Number(price);
      setTotal(total + totalItem);
      setCart([
        ...cart,
        { id, quantity, photos, name, price, totalItem: totalItem },
      ]);
    }
    setIsLoading(false);
  };

  const remove = (id) => {
    const carts = cart.filter((item) => item.id != id);
    setCart([...carts]);
  };
  const removeAll = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        removeCart: remove,
        addCart: add,
        setCart,
        count,
        total,
        cleanCart: removeAll,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
