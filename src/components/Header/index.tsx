import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";

const dataList = ["Qualquer lugar", "Qualquer semana", "Hóspedes"];

export default () => {
  return (
    <Flex
      justify="space-between"
      align={"center"}
      w="100%"
      px="20px"
      py="10px"
      h="fit-content"
      bgColor="#EE4A44"
    >
      <Link to="/">
        <Flex align="center" gap="10px">
          <FaRegPaperPlane size={"2em"} color="#FFF" />
          <Text color="#FFF" fontWeight="600">
            Airbnb
          </Text>
        </Flex>
      </Link>
      <Flex
        p="6px"
        borderRadius="15px"
        border="1px solid #fff"
        color="#FFF"
        gap="30px"
      >
        {dataList.map((item, index) => (
          <Flex key={index}>
            <Text
              _hover={{
                transform: "scale(1.05)",
                transition: "all 0.2s ease-in-out",
              }}
              borderRadius="6px"
              cursor="pointer"
              fontWeight="600"
              fontSize="md"
              p="3px"
            >
              {item}
            </Text>
          </Flex>
        ))}
        <Flex
          align="center"
          bgColor="#fff"
          borderRadius="30px"
          w="40px"
          cursor="pointer"
          justify="center"
        >
          <BiSearchAlt color="#000" />
        </Flex>
      </Flex>
      <Menu>
        <MenuButton>
          <Flex
            _hover={{
              cursor: "pointer",
              boxShadow: "0px 0px 4px 0px #000",
              transition: "all 0.3s ease",
            }}
            justify="space-between"
            px="8px"
            align="center"
            w="70px"
            border="2px solid #fff"
            h="40px"
            borderRadius="20px"
          >
            <RxHamburgerMenu size={"1.2em"} color="#fff" />
            <FiUser size={"1.5em"} color="#FFF" />
          </Flex>
        </MenuButton>
        <MenuList zIndex={999}>
          <Link to="/cadaster">
            <MenuItem>Cadastre-se</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Entrar</MenuItem>
          </Link>
          <Flex my="5px" w="100%" border="1px solid #ccc"></Flex>
          <MenuItem>Anuncie seu espaço no Airbnb</MenuItem>
          <MenuItem>Ofereça uma experiência</MenuItem>
          <MenuItem>Ajuda</MenuItem>
        </MenuList>
      </Menu>
      {/* </Link> */}
    </Flex>
  );
};
