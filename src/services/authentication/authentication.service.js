import React from "react";
import { auth } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const LoginRequest = async (user, password) => {
  return await signInWithEmailAndPassword(auth, user, password);
};

export const Register = async (user, password, repeatedPassword) => {
  await createUserWithEmailAndPassword(auth, user, password);
};
export default LoginRequest;
