import React, { useState, createContext, useEffect } from "react";
import LoginRequest, {
  Register,
  NoRegister,
  ResetPassword,
} from "./authentication.service";
export const AuthenticationContext = createContext();
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../../firebaseConfig";

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  const getLogin = async ({ email, password }) => {
    setError("");
    setIsLoading(true);
    await LoginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsAuthenticated(true);

        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };
  const resetpassword = async (email) => {
    setError("");
    setIsLoading(true);
    await ResetPassword(email)
      .then((response) => {
        console.log(response, "response");
        //setUser(user);
        //setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError(e.message);
      });
  };
  const register = async ({
    email,
    password,
    repeatedPassword,
    telefono,
    nombre,
    estado,
    ciudad,
    colonia,
    cp,
    entrecalles,
  }) => {
    setError("");
    setIsLoading(true);

    if (password != repeatedPassword) {
      setIsLoading(false);
      return setError("password does not match");
    }
    await Register(
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
    )
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message, "");
        setError(e.message);
        setIsLoading(false);
      });
  };

  const OnNoRegister = async ({
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
    setIsLoading(true);
    setError("");

    await NoRegister({
      email,
      nombre,
      telefono,
      cp,
      estado,
      ciudad,
      colonia,
      cart,
      total,
    })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  };
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        error,
        onLogin: getLogin,
        onRegister: register,
        onLogout: logout,
        OnNoRegister: OnNoRegister,
        OnResetPassword: resetpassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
