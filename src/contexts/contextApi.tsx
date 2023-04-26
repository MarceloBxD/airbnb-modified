import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const [searchArea, setSearchArea] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/places", {
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
