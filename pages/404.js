import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react';

import { DocumentHead } from '../src/components';

const NotFound = () => {
  return (
    <>
      <DocumentHead pageTitle="404 - Page Not Found" />
      <Box pt={20}>
        <Container>
          <Heading as="h1" fontWeight="400">Not found</Heading>
          <Text color="brand.muted">The page you&apos;re looking for was not found.</Text>
          <Divider my={6} />
          <Box my={6} align="center">
            <NextLink href="/">
              <Button bg="brand.primary" color="#fff" _hover={{ opacity: 0.9 }}>
                Return to home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
