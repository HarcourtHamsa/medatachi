import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { SiEclipseche } from "react-icons/si";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"5xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader color="blue.400">Tokens</ListHeader>
            <Link href={"#"}>Jeti</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader color="blue.400">Resources</ListHeader>
            <Link href={"#"}>Whitepaper</Link>
            <Link href={"#"}>Docs</Link>
            <Link href={"#"}>GitHub</Link>
            <Link href={"#"}>Chat on Discord</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
