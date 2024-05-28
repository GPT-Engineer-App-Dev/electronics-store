import { Box, Container, VStack, Text, Image, Heading, SimpleGrid, Link, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with high-end features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop for professionals",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="blue.700" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading size="lg">ElectroShop</Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#">Home</Link>
              <Link href="#">Products</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Contact Us</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="start">
          <Heading>Welcome to ElectroShop</Heading>
          <Text>Find the best electronic products here!</Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
          {sampleProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading size="md">{product.name}</Heading>
                <Text mt={2}>{product.description}</Text>
                <Text mt={2} fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;