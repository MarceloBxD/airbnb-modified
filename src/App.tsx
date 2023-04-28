import Header from "./components/Header";
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import Cookies from "js-cookie";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
