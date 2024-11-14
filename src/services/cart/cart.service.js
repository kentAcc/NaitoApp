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
  query,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const PedidosToday = async (collectionName, date1) => {
  const pedidosRef = collection(db, collectionName);

  const q = await query(pedidosRef, where("fecha", "==", date1));

  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return documents;
};
