"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = { email: string; name: string } | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const userData = localStorage.getItem("user");
      if (isLoggedIn && userData) setUser(JSON.parse(userData));
    } catch (e) {
      // ignore
    }
  }, []);

  const saveSession = (u: { email: string; name: string }) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(u));
    setUser(u);
  };

  const login = async (email: string, password: string) => {
    // Check registered users in localStorage
    const raw = localStorage.getItem("registeredUsers");
    const users: { email: string; name: string; password: string }[] = raw
      ? JSON.parse(raw)
      : [];

    // allow fallback test account
    if (email === "user@example.com" && password === "password") {
      const u = { email, name: "User" };
      saveSession(u);
      return true;
    }

    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      saveSession({ email: found.email, name: found.name });
      return true;
    }

    return false;
  };

  const signup = async (name: string, email: string, password: string) => {
    const raw = localStorage.getItem("registeredUsers");
    const users: { email: string; name: string; password: string }[] = raw
      ? JSON.parse(raw)
      : [];

    if (users.find((u) => u.email === email)) return false; // already exists

    users.push({ email, name, password });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    saveSession({ email, name });
    return true;
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export default AuthProvider;
