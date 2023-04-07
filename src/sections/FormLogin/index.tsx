import { Flex, Input, Button, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useApp } from "../../contexts/contextApi";

export default () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const { setUser }: any = useApp();

  const handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
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
      setUser(response.data);
      setRedirect(true);
      setError("");
    } catch (err) {
      // console.log(err.response.data);
      if (err.response.data === "User not found") {
        setError("Usuário não encontrado");
      } else if (err.response.data === "Pass not ok") {
        setError("Senha incorreta");
      }
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Flex
      justify="center"
      h="calc(100vh - 77px)"
      flexDir="column"
      align="center"
      w="100%"
    >
      <Text color="red" fontSize="2xl" w="300px" fontWeight="bold" mb="10px">
        Login
      </Text>
      <Flex gap="10px" flexDir="column">
        <Input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Email"
          w="300px"
          maxW="100%"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          focusBorderColor="#EE4A44"
          variant="flushed"
          placeholder="Password"
          w="300px"
          maxW="100%"
        />
        {error && <Text color="red.600">{error}</Text>}
        <Button
          onClick={(e: any) => handleLogin(e)}
          colorScheme="red"
          w="100%"
          variant="solid"
          mt="10px"
        >
          Fazer login
        </Button>
        <Flex gap="10px">
          <Text>Ainda não possui uma conta?</Text>
          <Link to="/cadaster">
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              fontWeight="bold"
            >
              Cadastre-se
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
