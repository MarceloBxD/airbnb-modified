import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex w="100%" flexDir="column">
      <Header />
      <Outlet />
    </Flex>
  );
}

export default App;
