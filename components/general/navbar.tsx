import { Stack, Flex, Box, HStack, Divider } from "@chakra-ui/react";
import { QuestionIcon, WorkflowIcon } from "@primer/octicons-react";
import Link from "../../node_modules/next/link";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Logo from "./logo";
import LoginNavButton from "./loginnavbutton";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex
          align="center"
          justify="space-between"
          gap="2"
          pt="2"
          pl="2"
          pr="2"
          height="48px"
        >
          <Box p="1" flex="1">
            <Link href="/roadmap">
              <a>
                <WorkflowIcon size={24} />
              </a>
            </Link>
          </Box>
          <Box p="1" flex="1" align="center">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Box>
          <Box p="1" flex="1" align="right">
            <LoginNavButton />
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
