import { Flex, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useApp } from "../../contexts/contextApi";

export default () => {
  const [choose, setChoose] = useState<string>("");
  const { setData }: any = useApp();

  useEffect(() => {
    if (choose === "A-Z") {
      try {
        const getDatainOrder = async () => {
          const res = await axios.get("/ordem-alfabetica");
          setData(res.data);
        };
        getDatainOrder();
      } catch (err) {
        console.log(err);
      }
    } else if (choose === "menor preço") {
      try {
        const getByLowerPrice = async () => {
          const res = await axios.get("/ordem-menor-preco");
          setData(res.data);
        };
        getByLowerPrice();
      } catch (err) {
        console.log(err);
      }
    } else if (choose === "maior preço") {
      try {
        const getByHigherPrice = async () => {
          const res = await axios.get("/ordem-maior-preco");
          setData(res.data);
        };
        getByHigherPrice();
      } catch (err) {
        console.log(err);
      }
    }
  }, [choose]);

  return (
    <Flex
      position="fixed"
      bgColor="#ee4444"
      rounded="full"
      align="center"
      bottom="20px"
      right="20px"
      p="10px"
    >
      <Select
        onChange={(e) => setChoose(e.target.value)}
        color="#fff"
        defaultValue={"A-Z"}
        w="120px"
        borderColor="tomato"
        size="sm"
        variant="unstyled"
      >
        <option disabled>Selecionar...</option>
        <option style={{ color: "#000" }} value="A-Z">
          A-Z
        </option>
        <option style={{ color: "#000" }} value="menor preço">
          Menor preço
        </option>
        <option style={{ color: "#000" }} value="maior preço">
          Maior preço
        </option>
      </Select>
    </Flex>
  );
};
