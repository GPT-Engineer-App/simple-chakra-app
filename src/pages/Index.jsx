import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
    >
      <VStack spacing={4} textAlign="center">
        <Heading size="2xl" color="white">
          Welcome to Chakra UI
        </Heading>
        <Text fontSize="xl" color="white">
          Build accessible React apps & websites with speed.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;