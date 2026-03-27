import { Box, Container, VStack } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children = null }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      {/* <Sidebar /> */}
      <Container
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 0 }}
      >
        <VStack spacing={16} flex={1} w="full" as="main" mb={16}>
          {children}
        </VStack>
        <Analytics />
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;