import { createContext } from "react";

export type TAppState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
};

const initialContext: TAppState = {
  loading: false,
  setLoading: () => {},
  language: "en",
  setLanguage: () => {},
};

export const AppContext = createContext(initialContext);
