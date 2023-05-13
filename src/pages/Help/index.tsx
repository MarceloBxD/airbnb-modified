import { Flex, Text } from "@chakra-ui/react";
import { HelpCard } from "../../components";

export default () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justify="space-around"
      alignItems="center"
      maxW="100vw"
    >
      <HelpCard />
      <HelpCard />
      <HelpCard />
    </Flex>
  );
};
