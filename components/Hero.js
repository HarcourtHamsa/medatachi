import React from "react";
import Navbar from "./Navbar";

import styles from "../styles/sass/hero.module.scss";
import {
  Container,
  Button,
  Box,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";

function Hero() {
  return (
    <header className={styles.hero}>
      <Navbar />

      <div id="container">
        <Container maxW={"5xl"} mb={20} h={{ base: "70vh", md: "70vh" }}>
          <Center h="inherit">
            <Box>
              <Text
                as="h1"
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Read, Learn and Earn
              </Text>
              <Text
                w={{ base: "100%", md: "500px" }}
                m="auto"
                py={4}
                color="#a5acaf"
              >
                Read articles and earn. Learn all you need to kickstart your
                tech career and earn at the same time
              </Text>
              <Button
                size="lg"
                fontWeight="normal"
                w="fit-content"
                margin="auto"
                colorScheme="purple"
              >
                Join Community
              </Button>
            </Box>
          </Center>
        </Container>
      </div>
    </header>
  );
}

export default Hero;
