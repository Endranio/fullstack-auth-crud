// src/storage/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { is } from "zod/locales";
import { isAborted } from "zod/v3";

export type User = {
  id: string;
  name: string;
  email: string;
  gender: string;
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

// Ambil user dari localStorage (hanya di client)
const getUserFromStorage = (): User | null => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

const initialState: AuthState = {
  user: getUserFromStorage(),
  isAuthenticated: !!getUserFromStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.user = null;
      
      state.isAuthenticated = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
