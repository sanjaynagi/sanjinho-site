import { Box, Container, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
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
        <Footer />
      </Container>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

MainLayout.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Sanjay Curtis Nagi's personal website.",
};

export default MainLayout;