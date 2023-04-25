import { Flex, Text, Image } from "@chakra-ui/react";
import casa from "../../assets/images/house.jpg";
import NewPlaceForm from "../../components/NewPlaceForm";

export default () => {
  return (
    <Flex h="calc(100vh - 64px)" m="0 auto" justify="space-between">
      <Flex align="center">
        <Image
          w="400px"
          h="100%"
          src={casa}
          objectFit="cover"
          backgroundPosition="center"
        />
        <Flex mx="20px" maxW="450px" flexDir="column">
          <Text noOfLines={2} fontSize="2xl" fontWeight="bold">
            Adicione imóveis disponíveis e alugue para pessoas de todo o mundo!
          </Text>
          <Text mt="15px" noOfLines={2} fontSize="sm" color="#ccc">
            Adicione imóveis disponíveis e alugue para pessoas de todo o mundo!
            Adicione imóveis disponíveis e alugue para pessoas de todo o mundo!
            Adicione imóveis disponíveis e alugue para pessoas de todo o mundo!
          </Text>
        </Flex>
      </Flex>
      <Flex mr="200px" align="center">
        <Flex flexDir="column" p="10px" w="300px">
          <Text fontSize="2xl" fontWeight="bold" mb="10px">
            Adicionar Local
          </Text>
          <NewPlaceForm />
        </Flex>
      </Flex>
    </Flex>
  );
};
