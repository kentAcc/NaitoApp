import services from "../../services/products/products.json";
import { auth, db } from "../../../firebaseConfig";
import {
  collection,
  setDoc,
  doc,
  addDoc,
  getDocs,
  get,
  where,
  getDoc,
  query,
} from "firebase/firestore";

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

export const GetProductsAll = async () => {
  const collectionRef = collection(db, "Products"); // Replace with your collection name

  const snapshot = await getDocs(collectionRef); // Fetch all documents
  const dataArray = snapshot.docs.map((doc) => ({
    id: doc.id, // Document ID
    ...doc.data(), // Document data
  }));

  return dataArray;
};
