import { createContext } from "react";

export type TAppState = {
  loading: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
  setLoading: (loading: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
};

const initialContext: TAppState = {
  loading: false,
  menuOpen: false,
  toggleMenu: () => {},
  setLoading: () => {},
  language: "en",
  setLanguage: () => {},
};

export const AppContext = createContext(initialContext);
