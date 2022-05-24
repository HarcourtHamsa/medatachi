import { Box, Stack } from "@chakra-ui/react";
import React from "react";

function HamburgerIcon() {
  return (
    <Stack spacing={2} align="flex-end">
      <Box w="35px" h="2px" bg="white" />
      <Box w="20px" h="2px" bg="white" />
    </Stack>
  );
}

export default HamburgerIcon;
