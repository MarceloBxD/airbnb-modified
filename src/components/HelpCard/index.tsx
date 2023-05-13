import { Flex, Text, Image, Button } from "@chakra-ui/react";

export default () => {
  return (
    <Flex
      w="300px"
      h="450px"
      borderRadius="10px"
      flexDir="column"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      shadow={"xl"}
    >
      <Flex flex="1">
        <Image
          borderTopLeftRadius={"10px"}
          borderTopRightRadius={"10px"}
          src={
            "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVscHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </Flex>
      <Flex p="5" mb="100px" h="auto" flexDir="column" flex="1">
        <Text fontWeight="700" fontSize="xl" w="100%" textAlign="center">
          HelpCard
        </Text>
        <Text
          my="20px"
          fontWeight="700"
          fontSize="md"
          w="100%"
          textAlign="center"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sequi
          quibusdam neque libero! Culpa vero ab debitis laudantium error. Ab
          inventore eos voluptatem consectetur, beatae officiis repudiandae
          eaque quos deserunt.
        </Text>
        <Button
          alignSelf="center"
          position="absolute"
          bottom="20px"
          variant="ghost"
          colorScheme="yellow"
        >
          Ver mais
        </Button>
      </Flex>
    </Flex>
  );
};
