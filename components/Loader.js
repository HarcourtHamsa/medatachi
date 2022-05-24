import React from "react";
import styles from "../styles/sass/loader.module.scss";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";

function Loader() {
  return (
    <Flex w="full" h="100vh" justify="center" align="center" bg="#151515">
      <SimpleGrid columns={2} gap={1} className={styles.loader}>
        <Box w={5} h={5} bg="gray.300" borderRadius={"md"}></Box>
        <Box w={5} h={5} bg="gray.300" borderRadius={"md"}></Box>
        <Box w={5} h={5} bg="gray.300" borderRadius={"md"}></Box>
        <Box w={5} h={5} bg="gray.300" borderRadius={"md"}></Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Loader;
