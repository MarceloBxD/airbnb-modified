import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Flex, Image, Text, Grid } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { SiLinuxcontainers } from "react-icons/si";
import { AiOutlineFire } from "react-icons/ai";
import { GiSailboat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import { useApp } from "../../contexts/contextApi";
import { FiArrowRight } from "react-icons/fi";

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
  const navigate = useNavigate();
  const { data, setData, getData }: any = useApp();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex
      flexWrap="wrap"
      px="30px"
      gap="30px"
      py="20px"
      w="100%"
      justify="center"
    >
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        w="100%"
        gap="20px"
        justify="center"
      >
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

      <Flex maxW="1200px" justify="center" m="0 auto" flexWrap="wrap">
        {data.map((item: any) => (
          <Grid
            templateColumns={"auto"}
            w="33.33%"
            m="20px 50px"
            key={item._id}
            cursor="Pointer"
            flexDir="column"
            p="5px 10px"
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
                onClick={() => navigate(`/place/${item.placeid}`)}
                cursor="pointer"
                align="center"
                justify="center"
                borderRadius="50%"
                w="50px"
                h="50px"
                bg="#000"
                color="#fff"
              >
                <FiArrowRight />
              </Flex>
            </Flex>
          </Grid>
        ))}
      </Flex>
    </Flex>
  );
};

// <Flex
//   w="33.33%"
//   key={item.placeid}
//   cursor="Pointer"
//   flexDir="column"
//   p="5px 10px"
// >
//   <Image
//     objectFit="cover"
//     backgroundPosition="center"
//     backgroundSize="cover"
//     w="360px"
//     h="340px"
//     borderRadius="15px"
//     alt="image"
//   />
//   <Flex justify="space-between">
//     <Flex flexDir="column">
//       <Text fontWeight="bold">{item.name}</Text>
//       <Text>{item.description}</Text>
//       <Text color="#000" fontWeight="600">
//         R$ {item.price},00 /noite
//       </Text>
//       <Text color="#aaa">{item.location}</Text>
//     </Flex>
//     <Flex gap="4px" h="fit-content" align="center">
//       <Text align="center">{item.stars}</Text>
//       <IoStarSharp
//         style={{
//           alignSelf: "center",
//           justifyContent: "center",
//         }}
//       />
//     </Flex>
//   </Flex>
// </Flex>
