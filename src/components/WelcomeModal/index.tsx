import {
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import promocao from "../../assets/images/promocao.png";
import { useApp } from "../../contexts/contextApi";

export default () => {
  const { user, setWelcomeModalOpen }: any = useApp();
  console.log(user);
  return (
    <Modal isOpen onClose={() => {}}>
      <ModalOverlay />
      <ModalContent bgColor="#333" position="absolute">
        <ModalCloseButton
          onClick={() => setWelcomeModalOpen(false)}
          color="#fff"
        />
        <ModalHeader>
          <Text color="#fff">Promoção</Text>
        </ModalHeader>
        <ModalBody>
          <Text color="#fff">Bem-vindo(a) ao Airbnb {user?.name}!</Text>
          <br />
          <Box bgColor="#222" my="10px" borderRadius="10px" p="10px">
            <Text textAlign="center" color="#fff">
              Temos uma promoção especial para você, confira!
            </Text>
          </Box>
          <Image src={promocao} w="80%" />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="linkedin" variant="solid">
            <Text color="#fff">Promoção</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
