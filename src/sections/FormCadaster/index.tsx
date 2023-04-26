import { Flex, Input, Button, Text, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApp } from "../../contexts/contextApi";

import axios from "axios";

export default () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (name && email && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, password]);

  const { setError, error, isDisabled, setIsDisabled }: any = useApp();

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

      if (response) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Você já pode fazer login.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setError("");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.response.data.message);
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
          _hover={isDisabled ? {} : { bgColor: "#c53030" }}
          w="100%"
          bgColor={isDisabled ? "#ccc" : "#EE4A44"}
          mt="10px"
          isDisabled={isDisabled}
        >
          Cadastre-se
        </Button>
        {error && (
          <Text color="red" fontSize="sm">
            {error}
          </Text>
        )}
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
