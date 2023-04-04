import { Flex, Input, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Flex
      justify="center"
      h="calc(100vh - 77px)"
      flexDir="column"
      align="center"
      w="100%"
    >
      <Text
        color="red.600"
        fontSize="2xl"
        w="300px"
        fontWeight="bold"
        mb="10px"
      >
        Cadastro
      </Text>
      <Flex gap="10px" flexDir="column">
        <Input
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Name"
          w="300px"
          maxW="100%"
        />
        <Input
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Email"
          w="300px"
          maxW="100%"
        />
        <Input
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Password"
          w="300px"
          maxW="100%"
        />
        <Button colorScheme="red" w="100%" variant="ghost" mt="10px">
          Cadastre-se
        </Button>
        <Flex gap="10px">
          <Text>Já possui uma conta?</Text>
          <Link to="/">
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              fontWeight="bold"
            >
              Fazer Login
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
