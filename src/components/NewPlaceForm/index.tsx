import Inp from "../Inp";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const toast = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name,
      address,
      category,
      price,
      description,
      image,
    };

    const res = await axios.post("http://localhost:3000/register-place", data, {
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
      setName("");
      setAddress("");
      setCategory("");
      setPrice(0);
      setDescription("");
      setImage("");
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
      <Inp
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        focusBorderColor="#EE4A44"
        variant="flushed"
        _focus={{ fontSize: "13px" }}
        placeholder="Nome do local"
        mb="10px"
      />
      <Inp
        value={address}
        onChange={(e: any) => setAddress(e.target.value)}
        _focus={{ fontSize: "13px" }}
        focusBorderColor="#EE4A44"
        variant="flushed"
        placeholder="Endereço"
        mb="10px"
      />
      <Inp
        value={category}
        onChange={(e: any) => setCategory(e.target.value)}
        _focus={{ fontSize: "13px" }}
        focusBorderColor="#EE4A44"
        variant="flushed"
        placeholder="Categoria"
        mb="10px"
      />
      <Inp
        value={price}
        onChange={(e: any) => setPrice(e.target.value)}
        _focus={{ fontSize: "13px", translateY: "10px" }}
        focusBorderColor="#EE4A44"
        variant="flushed"
        placeholder="Preço"
        mb="10px"
      />
      <Inp
        value={description}
        onChange={(e: any) => setDescription(e.target.value)}
        _focus={{ fontSize: "13px" }}
        focusBorderColor="#EE4A44"
        variant="flushed"
        placeholder="Descrição"
        mb="10px"
      />
      <Inp
        value={image}
        onChange={(e: any) => setImage(e.target.value)}
        type="file"
        size="sm"
        placeholder="Imagem"
        border="none"
        mb="10px"
      />
      <Button type="submit" colorScheme="red" w="100%" variant="solid">
        Adicionar
      </Button>
    </form>
  );
};
