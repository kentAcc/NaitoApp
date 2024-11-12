import React from "react";
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
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const PedidosToday = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return documents;
};
