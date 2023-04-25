import {
  Flex,
  Input,
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
import { useApp } from "../../contexts/contextApi";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const handleLogout = () => {
  Cookies.remove("user");
  window.location.href = "/";
};

export default () => {
  const navigate = useNavigate();
  const { setSearchArea, searchArea, user }: any = useApp();
  const [name, setName] = useState<string>("");
  const { setData, getData }: any = useApp();

  const searchData = async (name: string) => {
    const response = await axios.post(
      `http://localhost:3000/place`,
      {
        name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    setData(response.data.place);
  };

  return (
    <Flex
      justify="space-between"
      align={"center"}
      w="100%"
      px="20px"
      py="10px"
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
        p="8px"
        borderRadius="15px"
        border="1px solid #fff"
        color="#FFF"
        gap="30px"
      >
        {!searchArea && (
          <Flex gap="10px">
            <Text
              _hover={{ transform: "scale(1.05)" }}
              cursor="pointer"
              fontWeight="500"
              onClick={() => getData()}
            >
              Qualquer lugar
            </Text>
            <Text fontWeight="500">Praia</Text>
            <Text fontWeight="500">Lugar</Text>
          </Flex>
        )}
        {searchArea && (
          <Input
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.key == "Enter") {
                searchData(name);
              }
            }}
            placeholder="Onde você quer ir?"
            _placeholder={{ color: "#ccc" }}
            onBlur={() => setSearchArea(false)}
            variant="unstyled"
            w="100%"
          />
        )}

        <Flex
          align="center"
          bgColor="#fff"
          borderRadius="30px"
          w="40px"
          cursor="pointer"
          justify="center"
          onClick={() => setSearchArea(true)}
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
            align="center"
            px="8px"
            gap="5px"
            w="fit-content"
            border="2px solid #fff"
            h="40px"
            borderRadius="20px"
          >
            <RxHamburgerMenu size={"1.2em"} color="#fff" />
            {user ? (
              <Flex
                w="25px"
                h="25px"
                align="center"
                bgColor="#000"
                justify="center"
                rounded="full"
              >
                <Text color="#fff">{user.name[0]}</Text>
              </Flex>
            ) : (
              <FiUser size={"1.5em"} color="#FFF" />
            )}
          </Flex>
        </MenuButton>
        <MenuList zIndex={999}>
          {!user && (
            <>
              <Link to="/cadaster">
                <MenuItem>Cadastre-se</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>Entrar</MenuItem>
              </Link>
              <Flex my="5px" w="100%" border="1px solid #ccc"></Flex>
            </>
          )}
          <MenuItem onClick={() => navigate("/place-add")}>
            Anuncie seu espaço no Airbnb
          </MenuItem>
          <MenuItem>Ofereça uma experiência</MenuItem>
          <MenuItem>Ajuda</MenuItem>
          {user && <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>}
        </MenuList>
      </Menu>
      {/* </Link> */}
    </Flex>
  );
};
