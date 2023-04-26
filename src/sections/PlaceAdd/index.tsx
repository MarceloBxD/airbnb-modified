import { Flex, Text, Image, Button, Select } from "@chakra-ui/react";
import NewPlaceForm from "../../components/NewPlaceForm";
import ImagePlaceForm from "../../components/ImagePlaceForm";
import Inp from "../../components/Inp";
import { useState } from "react";

import axios from "axios";

export default () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [photoLink, setPhotoLink] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState([]);

  const uploadByLink = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/upload-by-link",
        {
          link: photoLink,
        }
      );
      setImages((prev): any => {
        return [...prev, response.data];
      });
      setPhotoLink("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      gap="15px"
      flexDir={"column"}
      my="20px"
      h="calc(100vh - 62px)"
      mx="100px"
    >
      <Flex gap="10px" flexDir="column">
        <Text>Title</Text>
        <Inp
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Title"
        />
      </Flex>{" "}
      <Flex gap="10px" flexDir="column">
        <Text>Address</Text>
        <Inp
          value={address}
          onChange={(e: any) => setAddress(e.target.value)}
          placeholder="Address"
        />
      </Flex>
      <Flex gap="10px" flexDir="column">
        <Text>Category</Text>
        <Select onChange={(e: any) => setCategory(e.target.value)}>
          <option value="Restaurant">Restaurant</option>
          <option value="Bar">Bar</option>
          <option value="Hotel">Hotel</option>
          <option value="Museum">Museum</option>
          <option value="Park">Park</option>
          <option value="Other">Other</option>
        </Select>
      </Flex>
      <Flex gap="10px" flexDir="column">
        <Text>Price</Text>
        <Inp
          value={price}
          onChange={(e: any) => setPrice(e.target.value)}
          placeholder="Price"
        />
      </Flex>
      <Flex gap="10px" flexDir="column">
        <Text>Description</Text>
        <Inp
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </Flex>
      <Flex gap="10px" flexDir="column">
        <Text>Photos</Text>
        <Inp
          value={photoLink}
          onChange={(e: any) => setPhotoLink(e.target.value)}
          placeholder="Add using a link..."
        />
        <Button onClick={() => uploadByLink()} w="120px" mt="10px">
          Add Photo
        </Button>
      </Flex>
      {images.length > 0 && images.map((link: string) => <div>{link}</div>)}
    </Flex>
  );
};
