import React from "react";
import Hero from "../components/Hero";
import {
  Container,
  Button,
  Box,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { IoFlash } from "react-icons/io5";
import Footer from "../components/Footer";
import Image from "next/image";
import jeti from "../assets/images/jeti.png";
import human from "../assets/images/mindset.png";
import Support from "../components/Support";

import styles from "../styles/sass/index.module.scss";

function Index() {
  return (
    <Box bg="#151515" color="#fff">
      <Hero />

      <Container maxW={"5xl"} my={32}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={10}
          mt={10}
          alignItems="center"
        >
          <Box>
            <Stack spacing={6}>
              <Badge w="fit-content" colorScheme="purple" rounded="full" p={2}>
                Introducting
              </Badge>
              <Text
                as="h2"
                lineHeight={"110%"}
                fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
              >
                An Educational Platform To Enrich Your Mindset
              </Text>
              <Text>
                We are building an educational platform to enrich your mindset
                so as to enable you know what you need to know while earning
                jeti tokens.
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
            </Stack>
          </Box>

          <Box>
            <Image src={human} style={{ transform: "scale(.7)" }} />
          </Box>
        </SimpleGrid>
      </Container>

      <Box p={4} my={32}>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
          <Text
            as="h2"
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          >
            {" "}
            How Medatachi Protocol Works{" "}
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={2}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10}>
            <Box
              borderRadius={"10px"}
              _before={{
                content: '"01."',
                display: "block",
                position: "absolute",
                transform: "translateX(-50px) translateY(15px)",
              }}
            >
              <Text as="h2" my={"2"} fontSize="2xl">
                Sign Up
              </Text>
              <Text mt={2} color="#a5acaf">
                Easily create a free account on the Midatachi platform and log
                in into your account.
              </Text>
            </Box>

            <Box
              borderRadius={"10px"}
              _before={{
                content: '"02."',
                display: "block",
                position: "absolute",
                transform: "translateX(-50px) translateY(15px)",
              }}
            >
              <Text as="h2" my={"2"} fontSize="2xl">
                Read or Upload
              </Text>
              <Text mt={2} color="#a5acaf">
                Select an article to read or upload one yourself. Articles are
                usually tailored based on your likes.
              </Text>
            </Box>

            <Box
              borderRadius="10px"
              _before={{
                content: '"03."',
                display: "block",
                position: "absolute",
                transform: "translateX(-50px) translateY(15px)",
              }}
            >
              <Text as="h2" my={"2"} fontSize="2xl">
                Get Paid
              </Text>
              <Text mt={2} color="#a5acaf">
                Get paid with Jeti Tokens directly into your midatachi account
                for each article your read or upload.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box p={4} my={"32"}>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
          <Text
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            as="h2"
          >
            Jeti Token Summary
          </Text>

          <Text color="#a5acaf">
            Guild Gem (GDG), Guild Coin (GDC) and Guild Dust (GDD) are designed
            with the following principles in mind:
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={2}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            <Box mt={20}>
              <Flex
                borderWidth={1}
                borderColor="whiteAlpha.50"
                py="12px"
                px="25px"
                align="center"
                gap={3}
              >
                <IoFlash size={20} color="goldenrod" />
                <Text fontSize="sm">
                  $GDG gives specialized governance and staking power.
                </Text>
              </Flex>

              <Text
                as="h2"
                lineHeight={"110%"}
                fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
                my={5}
              >
                Jeti Token
              </Text>

              <Text mb={5} color="#a5acaf">
                Guild Coin ($GDC) is the main in-game currency used in Guild
                Protocol. GDC holders will be able to rent items and upgrades in
                the shop, buy collectibles in the marketplace, create clans,
                upgrade Avatars, purchase battelepass tickets etc.
              </Text>

              <Button
                size="lg"
                fontWeight="normal"
                w="fit-content"
                disabled
                colorScheme="purple"
              >
                Coming Soon
              </Button>
            </Box>

            <Image
              src={jeti}
              style={{ transform: "scale(.5)" }}
              className={styles.token}
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Container
        maxW={{ base: "90%", md: "5xl" }}
        my={20}
        rounded="2xl"
        h={{ base: "fit-content", md: "md" }}
        bg="purple.400"
        py="12px"
        px="25px"
        id="cta"
      >
        <Center h="inherit">
          <Stack spacing={6} textAlign="center">
            <Text
              as="h2"
              lineHeight={"110%"}
              fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            >
              Join Our Community
            </Text>

            <Text w={{ base: "100%", md: "500px" }}>
              Join our community today to win giveaways, airdrops and also
              regular update directly from the community.
            </Text>
            <Stack>
              <Button
                size="md"
                fontWeight="normal"
                w="fit-content"
                margin="auto"
                rounded="full"
                bg="white"
                color="purple.500"
              >
                Join Now
              </Button>
            </Stack>
          </Stack>
        </Center>
      </Container>

      <Support />
      <Footer />
    </Box>
  );
}

export default Index;
