import { Flex, Input, Button, Text, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log(response);

      if (response) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Você já pode fazer login.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      justify="center"
      h="calc(100vh - 77px)"
      flexDir="column"
      align="center"
      w="100%"
    >
      <Text color="red" fontSize="2xl" w="300px" fontWeight="bold" mb="10px">
        Cadastro
      </Text>
      <Flex gap="10px" flexDir="column">
        <Input
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Name"
          w="300px"
          maxW="100%"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Email"
          w="300px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxW="100%"
        />
        <Input
          focusBorderColor="#EE4A44"
          variant="flushed"
          type="password"
          placeholder="Password"
          w="300px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxW="100%"
        />
        <Button
          onClick={(e: any) => handleSubmit(e)}
          colorScheme="red"
          w="100%"
          variant="solid"
          mt="10px"
        >
          Cadastre-se
        </Button>
        <Flex gap="10px">
          <Text>Já possui uma conta?</Text>
          <Link to="/login">
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
