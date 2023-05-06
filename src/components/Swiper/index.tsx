import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Flex, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { SiLinuxcontainers } from "react-icons/si";
import { AiOutlineFire } from "react-icons/ai";
import { GiSailboat } from "react-icons/gi";
import { Navigation } from "swiper";

export default () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const swiperItems = [
    {
      id: 1,
      name: "Praia",
      icon: <FaUmbrellaBeach />,
    },
    {
      id: 2,
      name: "Piscina",
      icon: <FaSwimmingPool />,
    },
    {
      id: 3,
      name: "Café",
      icon: <FiCoffee />,
    },
    {
      id: 4,
      name: "Container",
      icon: <SiLinuxcontainers />,
    },
    {
      id: 5,
      name: "Fogueira",
      icon: <AiOutlineFire />,
    },
    {
      id: 6,
      name: "Barco",
      icon: <GiSailboat />,
    },
  ];

  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      align="center"
      w="100%"
      gap="10px"
      justify="center"
    >
      <Swiper
        onSwiper={() => setSwiperRef}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {swiperItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="100%"
              bg="gray.700"
              borderRadius="10px"
              cursor="pointer"
            >
              <Text color="#fff" fontWeight="bold" mt="10px">
                {item.name}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
