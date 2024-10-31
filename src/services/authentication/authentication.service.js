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
      /*console.log(uid, "uid");
      const ref = collection(db, "users");
      console.log(ref, "ref");
      ref.doc(db, uid);
*/
      /*.setDoc(data)
        .then(() => {
          //toast.show("Success!", { type: "success" });
          //navigation.navigate("Login", { user: data });
        })
        .catch((error) => {
          //toast.show(error.message, { type: "danger" });
        });*/
    }
  );
};
export default LoginRequest;

export const NoRegister = async ({
  telefono,
  cp,
  estado,
  ciudad,
  colonia,
  cart,
  total,
}) => {
  const data = {
    telefono,
    cp,
    estado,
    ciudad,
    colonia,
    cart,
    total,
  };

  const docRef = await addDoc(collection(db, "cart"), { data });

  /*console.log(uid, "uid");
      const ref = collection(db, "users");
      console.log(ref, "ref");
      ref.doc(db, uid);
*/
  /*.setDoc(data)
        .then(() => {
          //toast.show("Success!", { type: "success" });
          //navigation.navigate("Login", { user: data });
        })
        .catch((error) => {
          //toast.show(error.message, { type: "danger" });
        });*/
};
