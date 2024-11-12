import React from "react";
import { auth, db } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
const LoginRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const Register = async (
  email,
  password,
  repeatedPassword,
  address,
  name
) => {
  await createUserWithEmailAndPassword(auth, email, password).then(
    (response) => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email,
        name,
        address,
      };
      setDoc(doc(db, "users", uid), data);
    }
  );
};
export default LoginRequest;

export const NoRegister = async ({
  email,
  nombre,
  telefono,
  cp,
  estado,
  ciudad,
  colonia,
  cart,
  total,
}) => {
  const date = new Date().toLocaleString();
  const data = {
    email,
    nombre,
    telefono,
    cp,
    estado,
    ciudad,
    colonia,
    cart,
    total,
    fecha: date,
  };

  const docRef = await addDoc(collection(db, "cart"), { data });
};
