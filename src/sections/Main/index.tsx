import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { SiLinuxcontainers } from "react-icons/si";
import { AiOutlineFire } from "react-icons/ai";
import { GiSailboat } from "react-icons/gi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
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
  const [swiperRef, setSwiperRef] = useState(null);
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
        <Swiper
          onSwiper={() => setSwiperRef}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              _hover={{
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              justify="center"
              align="center"
              flexDir="column"
            >
              <FaUmbrellaBeach />
              <Text>Praia</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              _hover={{
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              justify="center"
              align="center"
              flexDir="column"
            >
              <FaSwimmingPool />
              <Text>Piscina</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              _hover={{
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              justify="center"
              align="center"
              flexDir="column"
            >
              <FiCoffee />
              <Text>Pousada</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              _hover={{
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              justify="center"
              align="center"
              flexDir="column"
            >
              <SiLinuxcontainers />
              <Text>Containeres</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              _hover={{
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              justify="center"
              align="center"
              flexDir="column"
            >
              <AiOutlineFire />
              <Text>Em alta</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              _hover={{
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              justify="center"
              align="center"
              flexDir="column"
            >
              <GiSailboat />
              <Text>Barcos</Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
      {data.map((item, index) => (
        <Flex key={index} h="fit-content" cursor="Pointer" flexDir="column">
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
