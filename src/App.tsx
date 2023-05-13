import { Flex } from "@chakra-ui/react";
import { Header } from "./components";
import { useApp } from "./contexts/contextApi";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Flex w="100%" maxW="100vw" flexDir="column">
      <Header />
      <Outlet />
    </Flex>
  );
}

export default App;
