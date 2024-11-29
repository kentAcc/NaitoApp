import React from "react";
import { auth, db } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  collection,
  setDoc,
  doc,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";

const LoginRequest = async (email, password) => {
  //return ({await signInWithEmailAndPassword(auth, email, password); });
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  // Step 2: Fetch additional user data from Firestore
  const userRef = doc(db, "users", user.uid); // Reference to the user's document in Firestore
  const docSnapshot = await getDoc(userRef);

  if (docSnapshot.exists()) {
    // User document exists, return the user data
    const userData = docSnapshot.data();
    // You can now access additional user info like username, preferences, etc.
    return {
      user,
      userData, // Additional data like username, preferences, etc.
    };
  } else {
    console.log("No additional data found for user.");
    return {
      user,
      userData: null, // No additional data available
    };
  }
};

export const Register = async (
  email,
  password,
  repeatedPassword,
  telefono,
  nombre,
  estado,
  ciudad,
  colonia,
  cp,
  entrecalles
) => {
  await createUserWithEmailAndPassword(auth, email, password).then(
    (response) => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email,
        telefono,
        nombre,
        estado,
        ciudad,
        colonia,
        cp,
        entrecalles,
      };
      console.log("se guardo el data", data);
      setDoc(doc(db, "users", uid), {
        id: uid,
        email,
        telefono,
        nombre,
        estado,
        ciudad,
        colonia,
        cp,
        entrecalles,
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  );
};

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
  const date = new Date().toLocaleDateString("es-mx");

  const docRef = await addDoc(collection(db, "cart"), {
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
  });
};
export const ResetPassword = async (email) => {
  console.log("from service", email);
  await sendPasswordResetEmail(auth, email);
};
export default LoginRequest;
