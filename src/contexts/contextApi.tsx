import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const [searchArea, setSearchArea] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState<boolean>(false);

  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await axios.get("/profile");
      setUser(data);
    };
    verifyUser();
  }, []);

  const getData = async () => {
    const response = await axios.get("/places", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    setData(response.data);
  };

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
    getData,
    isDisabled,
    setIsDisabled,
    breakpoints,
    welcomeModalOpen,
    setWelcomeModalOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
