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
  useEffect(() => {
    const totalProducts = cart.reduce(
      (sum, current) => sum + Number(current.quantity),
      0
    );
    setCount(totalProducts);
    console.log("carrito actualizado", cart.length);
  }, [cart, id, quantity]);

  const add = ({ id, photos, quantity, name, price }) => {
    const found = cart.find((item) => item.id == id);
    if (found) {
      var item = {
        id,
        photos,
        quantity: Number(found.quantity) + Number(quantity, quantity),
        name,
        price,
      };
      cart[cart.findIndex((el) => el.id === item.id)] = item;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, quantity, photos, name, price }]);
    }
  };

  const remove = (product) => {};

  return (
    <CartContext.Provider
      value={{ cart, removeCart: remove, addCart: add, setCart, count }}
    >
      {children}
    </CartContext.Provider>
  );
};
