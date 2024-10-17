import services from "../../services/products/products.json";
const products = Array.from(services);

export const productsRequest = (search, slice) => {
  return new Promise((resolve, reject) => {
    const filter = products.filter((z) =>
      z.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!filter) {
      reject("not found");
    }

    resolve(filter);
  });
};

export const productsFiveStars = () => {
  return new Promise((resolve, reject) => {
    const filter = products.filter((z) => z.promocion === true);

    if (!filter) {
      reject("not found");
    }

    resolve(filter);
  });
};

export const productsRandom = () => {
  return new Promise((resolve, reject) => {
    const filter = products.filter((z) => z.promocion === true);

    if (!filter) {
      reject("not found");
    }

    resolve(filter);
  });
};
