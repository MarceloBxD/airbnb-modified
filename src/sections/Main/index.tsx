import { Flex, Image, Text } from "@chakra-ui/react";
import { IoStarSharp } from "react-icons/io5";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location: "Paraty, RJ",
    name: "Casa Black Power",
    description: "Acomoda 4 pessoas",
    price: "R$ 1.000,00 /noite",
    stars: "4.5",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location: "Paraty, RJ",
    name: "Casa Armandi Lombardi",
    description: "Acomoda 4 pessoas",
    stars: "4.5",
    price: "R$ 1.000,00 /noite",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location: "Búzios, RJ",
    name: "Casa inteira",
    description: "Acomoda 4 pessoas",
    stars: "4.5",
    price: "R$ 1.000,00 /noite",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location: "Búzios, RJ",
    name: "Casa inteira",
    description: "Acomoda 4 pessoas",
    stars: "4.5",
    price: "R$ 1.000,00 /noite",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location: "Búzios, RJ",
    name: "Casa inteira",
    description: "Acomoda 4 pessoas",
    stars: "4.5",
    price: "R$ 1.000,00 /noite",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    location: "Búzios, RJ",
    name: "Casa inteira",
    description: "Acomoda 4 pessoas",
    stars: "4.5",
    price: "R$ 1.000,00 /noite",
  },
];

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
  return (
    <Flex
      flexWrap="wrap"
      px="30px"
      gap="30px"
      py="20px"
      w="100%"
      justify="center"
    >
      <Flex align="center" w="100%" gap="20px" justify="center">
        <Flex
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <BsArrowRightCircle
            cursor="pointer"
            style={{ transform: "rotate(180deg)" }}
            size="1.5em"
          />
        </Flex>
        {optionsList.map((item) => (
          <Flex
            flexDir="column"
            key={item.id}
            h="fit-content"
            cursor="pointer"
            w="fit-content"
            justify="center"
            align="center"
            borderRadius="15px"
            px="5px"
            py="6px"
            gap="10px"
          >
            <BsFillHouseDoorFill color="#333" size="1em" />
            <Text fontSize="sm" fontWeight="500">
              {item.name}
            </Text>
          </Flex>
        ))}
        <Flex
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <BsArrowRightCircle cursor="pointer" size="1.5em" />
        </Flex>
      </Flex>
      {data.map((item) => (
        <Flex h="fit-content" cursor="Pointer" flexDir="column">
          <Image
            objectFit="cover"
            backgroundPosition="center"
            backgroundSize="cover"
            w="360px"
            h="340px"
            borderRadius="15px"
            src={item.src}
            alt="image"
          />
          <Flex justify="space-between">
            <Flex flexDir="column">
              <Text fontWeight="bold">{item.name}</Text>
              <Text>{item.description}</Text>
              <Text color="#000" fontWeight="600">
                {item.price}
              </Text>
              <Text color="#aaa">{item.location}</Text>
            </Flex>
            <Flex gap="4px" h="fit-content" align="center">
              <Text align="center">{item.stars}</Text>
              <IoStarSharp
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
