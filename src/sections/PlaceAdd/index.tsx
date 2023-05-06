import {
  Flex,
  Input,
  Text,
  Image,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";
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

  const uploadPhotos = async (e: any) => {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    let response = await axios.post("/uploads", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setImages((prev): any => {
      return [...prev, ...response.data];
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name,
      address,
      category,
      price,
      description,
      image: images,
    };

    try {
      const response = await axios.post("/register-place", data);

      if (response) {
        toast({
          title: "Adicionado com Sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setName("");
        setAddress("");
        setCategory("");
        setPrice("");
        setDescription("");
        setImages([]);
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
        p="10px"
        gap="15px"
        flexDir={"column"}
        my={{ base: "20px", md: "50px" }}
        mx={{ base: "20px", md: "50px" }}
      >
        <PreInput
          placeholder="Casa 2 - 2º Andar (Itaperuna)"
          title="Nome do local"
          value={name}
          onChange={setName}
        />
        <PreInput
          placeholder="Rua Jornalista Henrique Cordeiro, 200 - Centro"
          title="Endereço"
          value={address}
          onChange={setAddress}
        />
        <Flex gap="10px" flexDir="column">
          <Text fontWeight="bold">Category</Text>
          <Select
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Bar">Bar</option>
            <option value="Hotel">Hotel</option>
            <option selected value="Museum">
              Museum
            </option>
            <option value="Park">Park</option>
            <option value="Other">Other</option>
          </Select>
        </Flex>
        <PreInput
          placeholder="200"
          title="Preço p/ noite"
          value={price}
          onChange={setPrice}
        />
        <PreInput
          title="Descrição"
          value={description}
          onChange={setDescription}
          placeholder="Description"
        />
        <Flex gap="10px" flexDir="column">
          <Text fontWeight="bold">Fotos</Text>
          <Inp
            value={photoLink}
            onChange={setPhotoLink}
            placeholder="Adicione uma ou mais fotos do local com um link"
          />
          <Button onClick={() => uploadByLink()} w="120px" mt="10px">
            Add Photo
          </Button>
        </Flex>

        <Flex flexWrap="wrap" w="100%" gap="10px">
          {images.length > 0 &&
            images.map((link: string, index) => (
              <Image
                rounded="md"
                key={index}
                w="350px"
                h="200px"
                objectFit="cover"
                backgroundPosition="center"
                backgroundSize="cover"
                src={"http://localhost:3000/uploads/" + link}
                alt="Place image"
              />
            ))}
        </Flex>
        <label
          style={{
            display: "flex",
            gap: "10px",
            borderRadius: "8px",
            padding: "10px",
            border: "1px solid #000",
            cursor: "pointer",
            width: "120px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input multiple onChange={uploadPhotos} type="file" hidden />
          <Image w="20px" src={file} />
          <Text fontSize="12px">Upload</Text>
        </label>
        <Button type="submit" bgColor="#EE4A44" p="10px" variant={"unstyled"}>
          <Text color="#fff">Enviar</Text>
        </Button>
      </Flex>
    </form>
  );
};
