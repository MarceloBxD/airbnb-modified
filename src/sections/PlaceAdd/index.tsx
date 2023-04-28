import { Flex, Text, Image, Button, Select, useToast } from "@chakra-ui/react";
import { Inp, PreInput } from "../../components";
import { useState } from "react";
import file from "../../assets/svg/file.svg";
import axios from "axios";

export default () => {
  // criando states para guardar os valores dos inputs
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState([]);
  const [photoLink, setPhotoLink] = useState<string>("");
  const toast = useToast();

  const uploadByLink = async () => {
    try {
      const response = await axios.post("/upload-by-link", {
        link: photoLink,
      });
      setImages((prev): any => {
        return [...prev, response.data];
      });
      setPhotoLink("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name,
      address,
      category,
      price,
      description,
      // image: images,
    };

    try {
      const response = await axios.post("/register-place", { data });
      console.log(response.data);

      if (response) {
        toast({
          title: "Adicionado com Sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Houve algum erro ao adicionar o local!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: err.response.data.message,
        description: "Faça login para adicionar um local!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  // err.response.data.message;

  return (
    <form onSubmit={(e: any) => handleSubmit(e)}>
      <Flex
        gap="15px"
        flexDir={"column"}
        my="20px"
        h="calc(100vh - 62px)"
        mx="100px"
      >
        <PreInput
          placeholder="Name"
          title="Name"
          value={name}
          onChange={setName}
        />
        <PreInput
          placeholder="Address"
          title="Address"
          value={address}
          onChange={setAddress}
        />
        <Flex gap="10px" flexDir="column">
          <Text>Category</Text>
          <Select
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Bar">Bar</option>
            <option value="Hotel">Hotel</option>
            <option value="Museum">Museum</option>
            <option value="Park">Park</option>
            <option value="Other">Other</option>
          </Select>
        </Flex>
        <PreInput
          placeholder="Price"
          title="Price"
          value={price}
          onChange={setPrice}
        />
        <PreInput
          title="Description"
          value={description}
          onChange={setDescription}
          placeholder="Description"
        />
        <Flex gap="10px" flexDir="column">
          <Text fontWeight="bold">Photos</Text>
          <Inp
            value={photoLink}
            onChange={setPhotoLink}
            placeholder="Add using a link..."
          />
          <Button onClick={() => uploadByLink()} w="120px" mt="10px">
            Add Photo
          </Button>
        </Flex>
        <Button w="200px" size="md" gap="5px" variant="outline">
          <Image w="20px" src={file} />
          <Text fontSize="12px">Upload</Text>
        </Button>
        {images.length > 0 &&
          images.map((link: string) => (
            <div>
              <Image
                rounded="md"
                w="350px"
                h="200px"
                objectFit="cover"
                backgroundPosition="center"
                backgroundSize="cover"
                src={"http://localhost:3000/uploads/" + link}
                alt="Place image"
              />
            </div>
          ))}
        <Button type="submit" bgColor="#EE4A44" variant={"unstyled"}>
          <Text color="#fff">Enviar</Text>
        </Button>
      </Flex>
    </form>
  );
};
