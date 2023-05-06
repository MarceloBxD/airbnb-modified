import {
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

// Icons
import { FaRegPaperPlane } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";

// React Router
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";
import { useApp } from "../../contexts/contextApi";
import { useState } from "react";

export default () => {
  const navigate = useNavigate();
  const { setSearchArea, searchArea, getData, setData, user }: any = useApp();
  const [name, setName] = useState<string>("");
  const [redirectToLogin, setRedirectToLogin] = useState<any>("");

  const handleLogout = async () => {
    const response = await axios.post("/logout");
    console.log(response.data);
    // if (response) {
    //   setRedirectToLogin("/login");
    // }
  };

  // if (redirectToLogin) {
  //   return <Navigate to={redirectToLogin} />;
  // }

  const searchData = async (name: string) => {
    const response = await axios.post(
      `/place`,
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
    setName("");
  };

  return (
    <Flex
      justify="space-between"
      align={"center"}
      gap={{ base: "10px", md: "0px" }}
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
        display={{ base: "none", md: "flex" }}
        p="8px"
        borderRadius="15px"
        border="1px solid #fff"
        color="#FFF"
        gap="30px"
      >
        {!searchArea && (
          <Flex display={{ sm: "none", md: "flex" }} gap="10px">
            <Text cursor="pointer" fontWeight="500" onClick={() => getData()}>
              Qualquer lugar
            </Text>
            <Text cursor="pointer" fontWeight="500">
              Praia
            </Text>
            <Text cursor="pointer" fontWeight="500">
              Lugar
            </Text>
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
          display={{ sm: "none", lg: "flex" }}
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
            align="center"
            justify="center"
            px="8px"
            gap="5px"
            w="fit-content"
            border="2px solid #fff"
            h="40px"
            borderRadius="20px"
          >
            <RxHamburgerMenu size={"1.2em"} color="#fff" />
            {!!user && <Text color="#fff">{user.name}</Text>}
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
