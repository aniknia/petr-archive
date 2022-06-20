import { useState } from "react";
import { useColorModeValue, Spacer, HStack, Box, Text } from "@chakra-ui/react";
import Overlay from "./overlay";
import Underlay from "./underlay";

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );
  const [hover, setHover] = useState(false);

  return (
    <>
      <Box
        width={320}
        height={360}
        m="15"
        borderRadius="lg"
        backgroundColor={backgroundColor}
        overflow="hidden"
        onClick={() => setHover(!hover)}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {hover ? (
          <Overlay
            petr={props.petr}
            visibility={hover ? "vilible" : "hidden"}
          />
        ) : (
          <Underlay petr={props.petr} />
        )}
        <HStack
          justify="space-between"
          alignItems="center"
          pb="2"
          pr="2"
          pl="2"
          m="0"
        >
          <Text fontWeight="semibold" noOfLines={1}>
            {props.petr.name}
          </Text>
          <Spacer />
        </HStack>
      </Box>
    </>
  );
}
