import { Text, Flex } from "@chakra-ui/react";
import Inp from "../Inp";

interface iPreInput {
  title: string;
  value: string;
  onChange: any;
  placeholder: string;
}

export default ({ title, value, onChange, placeholder }: iPreInput) => {
  return (
    <Flex gap="10px" flexDir="column">
      <Text>{title}</Text>
      <Inp value={value} onChange={onChange} placeholder={placeholder} />
    </Flex>
  );
};
