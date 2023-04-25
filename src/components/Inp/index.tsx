import { Input } from "@chakra-ui/react";

interface iInput {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

export default ({ placeholder, value, onChange, ...props }: any) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};