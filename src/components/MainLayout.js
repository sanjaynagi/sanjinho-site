import { Box, Container, VStack } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children = null }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 5, lg: 0 }}
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
