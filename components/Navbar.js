import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import HamburgerIcon from "../components/HamburgerIcon";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#151515", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        pos="fixed"
        left="0"
        right="0"
        top="0"
        zIndex={8}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "space-between" }}
          align="center"
          maxW="5xl"
          m="auto"
        >
          <Text as="h2" fontSize="lg">Medatachi</Text>

          <Box display={{ base: "none", md: "block" }}>
            <DesktopNav />
          </Box>

          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"unstyled"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} isOpen={isOpen} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </NextLink>
        </Box>
      ))}

      <Button fontWeight="normal" colorScheme="purple">
        <NextLink p={2} href={"/"} fontSize={"sm"} fontWeight={500}>
          Join Discord
        </NextLink>
      </Button>
    </Stack>
  );
};

const MobileNav = ({ onToggle, isOpen }) => {
  return (
    <Stack
      bg={useColorModeValue("#151515", "gray.800")}
      p={4}
      h="100vh"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      display={{ md: "none" }}
    >
      <Flex
        display={{ base: "flex", md: "none" }}
        justifyContent="space-between"
        align="center"
        mb={20}
        h="50px"
      >
        {/* logo */}
        <p></p>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"unstyled"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>

      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        borderBottomWidth={2}
        borderColor="gray.700"
        textAlign="center"
      >
        <Text
          fontWeight={"normal"}
          color={useColorModeValue("white", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Gameplay ",
    href: "/",
  },
  {
    label: "Tokens",
    href: "/",
  },
  {
    label: "Community",
    href: "/",
  },
];

// styles
const styles = {
  greenButton: {
    backgroundColor: "green",
    color: "white",
  },
};
