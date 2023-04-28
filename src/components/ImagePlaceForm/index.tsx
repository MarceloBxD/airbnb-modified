import Inp from "../Inp";
import { Button, Flex, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useApp } from "../../contexts/contextApi";

export default () => {
  const toast = useToast();
  const { isDisabled }: any = useApp();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {};

    const res = await axios.post("/register-place", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (res) {
      toast({
        title: "Local adicionado com sucesso!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Erro ao adicionar local!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="20px" flexDir="column">
        <Inp variant="flushed" placeholder="Link" />
        <Button
          isDisabled={isDisabled}
          type="submit"
          colorScheme="red"
          w="100%"
          variant="solid"
          _hover={isDisabled ? {} : { bgColor: "#c53030" }}
          bgColor={isDisabled ? "#ccc" : "#EE4A44"}
        >
          Adicionar
        </Button>
      </Flex>
    </form>
  );
};
