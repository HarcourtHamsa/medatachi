import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Support() {
  return (
    <Box>
      <Flex
        gap={2}
        pos="fixed"
        bottom={{ base: "5%", md: "5%" }}
        right={{ base: "5%", md: "5%" }}
        align="center"
        py="12px"
        px="25px"
        rounded="full"
        bg="white"
        color="purple.500"
      >
        <AiOutlineQuestionCircle size={20} />
        <Text>Support</Text>
      </Flex>
    </Box>
  );
}

export default Support;
