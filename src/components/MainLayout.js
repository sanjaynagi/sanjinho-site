import { Box, Container, VStack } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children = null }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container
        // Same width and gutters as the navbar, so the page edge lines up
        // with the wordmark above it.
        maxW="container.lg"
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 5, md: 6 }}
      >
        <VStack spacing={20} flex={1} w="full" as="main" mb={16}>
          {children}
        </VStack>
        <Analytics />
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
