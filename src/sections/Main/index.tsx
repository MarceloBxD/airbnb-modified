import { useEffect, useState } from "react";
import { Flex, Image, Text, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/contextApi";
import { FiArrowRight } from "react-icons/fi";
import { FooterSearch, Swiper } from "../../components";

const optionsList = [
  {
    id: 1,
    name: "Chalés",
  },
  {
    id: 2,
    name: "Vistas Incríveis",
  },
  {
    id: 3,
    name: "No interior",
  },
  {
    id: 4,
    name: "Nas alturas",
  },
  {
    id: 5,
    name: "Containers",
  },
  {
    id: 6,
    name: "Em frente a praia",
  },
  {
    id: 7,
    name: "Pousadas",
  },
  {
    id: 8,
    name: "Piscinas Incríveis",
  },
  {
    id: 9,
    name: "Microcasas",
  },
];

export default () => {
  const navigate = useNavigate();
  const { data, getData }: any = useApp();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex
      align="center"
      flexWrap="wrap"
      gap="30px"
      py="20px"
      px="20px"
      w="100%"
      justify="center"
    >
      <Swiper />
      <Flex
        maxW="100vw"
        w="100%"
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {data.map((item: any) => (
          <Grid
            display="flex"
            justifyContent={{ base: "center", md: "space-between" }}
            w={{ base: "100%", md: "360px" }}
            m={{ base: "20px", md: "15px" }}
            key={item._id}
            cursor="Pointer"
            flexDir="column"
          >
            <Image
              objectFit="cover"
              backgroundPosition="center"
              backgroundSize="cover"
              w="360px"
              h="340px"
              borderRadius="15px"
              alt="image"
            />
            <Flex justify="space-between">
              <Flex flexDir="column">
                <Text fontWeight="bold">{item.name}</Text>
                <Text>{item.description}</Text>
                <Text color="#000" fontWeight="600">
                  R$ {item.price},00 /noite
                </Text>
                <Text color="#aaa">{item.location}</Text>
              </Flex>
              <Flex
                // onClick={() => navigate(`/place/${item.placeid}`)}
                cursor="pointer"
                align="center"
                justify="center"
                borderRadius="50%"
                w="50px"
                h="50px"
                bg="#000"
                display={{ base: "none", md: "flex" }}
                color="#fff"
              >
                <FiArrowRight />
              </Flex>
            </Flex>
          </Grid>
        ))}
        <FooterSearch />
      </Flex>
    </Flex>
  );
};
