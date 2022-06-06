import {
  useColorModeValue,
  Spacer,
  HStack,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import PetrImage from "./petrimage";
import { HeartFillIcon } from "@primer/octicons-react";

export default function Item(props) {
  const backgroundColor = useColorModeValue(
    "#EDF2F7",
    "rgba(255, 255, 255, 0.08)"
  );

  return (
    <>
      <Box
        width={320}
        m="15"
        borderRadius="lg"
        backgroundColor={backgroundColor}
        overflow="hidden"
      >
        <PetrImage src={props.petr.attributes.image.data[0].attributes.url} />

        <HStack
          justify="space-between"
          alignItems="center"
          pb="2"
          pr="2"
          pl="2"
          m="0"
        >
          <Text fontWeight="semibold" noOfLines={1}>
            {props.petr.attributes.name}
          </Text>
          <Spacer />
          <IconButton
            aira-label="Like Petr"
            icon={<HeartFillIcon size={24} />}
            isRound={true}
          />
        </HStack>
      </Box>
    </>
  );
}
