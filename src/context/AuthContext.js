"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // undefined = still resolving, null = signed out, object = signed in
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (!auth) { setUser(null); return; }
    return onAuthStateChanged(auth, setUser);
  }, []);

  function signOut() {
    return auth ? firebaseSignOut(auth) : Promise.resolve();
  }

  return (
    <AuthContext.Provider value={{ user, loading: user === undefined, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
