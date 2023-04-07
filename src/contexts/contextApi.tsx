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

  // Anotação: Levar usuário para outra página quando clicar no anúncio 

  const value = {
    user,
    setUser,
    searchArea,
    setSearchArea,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
