import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import axios from "axios";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      axios.get("http://localhost:3000/profile");
    }
  }, []);

  const value = { user, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
