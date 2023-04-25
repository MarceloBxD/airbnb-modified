import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const [searchArea, setSearchArea] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<[string] | [number]>([]);

  // Anotação: Levar usuário para outra página quando clicar no anúncio

  const value = {
    user,
    setUser,
    searchArea,
    setSearchArea,
    error,
    setError,
    data,
    setData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
