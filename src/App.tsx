import { Flex } from "@chakra-ui/react";
import { Header, WelcomeModal } from "./components";
import { useApp } from "./contexts/contextApi";
import { Outlet } from "react-router-dom";

function App() {
  const { welcomeModalOpen }: any = useApp();
  return (
    <Flex w="100%" maxW="100vw" flexDir="column">
      <Header />
      {welcomeModalOpen && <WelcomeModal />}
      <Outlet />
    </Flex>
  );
}

export default App;
