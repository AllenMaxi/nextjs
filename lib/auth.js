import React, { useState, useEffect, useContext, createContext } from "react";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebase from "./firebase";

const authContext = createContext();
const provider = new GithubAuthProvider();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  console.log(user);
  const signinWhitGithub = () => {
    const auth = getAuth();
    return signInWithPopup(auth, provider).then((response) => {
      setUser(response.user);
      return response.user;
    });
  };

  const signout = () => {
    const auth = getAuth();
    return signOut(auth).then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWhitGithub,
    signout,
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
