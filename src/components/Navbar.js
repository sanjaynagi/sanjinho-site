import {
  Container,
  Box,
  Stack,
  Flex,
  Divider,
  useColorModeValue,
  Text,
  useMediaQuery,
  IconButton
} from '@chakra-ui/react';

import { HiPhoto, HiOutlinePhoto } from 'react-icons/hi';

import InternalLink from './InternalLink';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = props => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#5c5e5b')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={1}
        maxW="container.lg"
        wrap="wrap"
        as='nav'
        align="center"
        justify="space-between"
      >
        <Flex align="center">
            <InternalLink href="/" height="%50">
            <Text
              fontSize={{ base: '0px', md: '18px' }}
              fontWeight={{ base: '0', md: '600' }}
              sx={{
                background:
                  'linear-gradient(45deg, #00E1B0, #5c5e5b 30%, #ffffff 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '800%'
              }}
            >
              Sanjay Curtis Nagi
            </Text>
          </InternalLink>
        </Flex>


        {isMobile ? (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}

          >
            <InternalLink href="/about" fontSize="xs">About</InternalLink>
            <InternalLink href="/blog" fontSize="xs">Blog</InternalLink>
            <InternalLink href="/cv" fontSize="xs">CV</InternalLink>
            <InternalLink href="/publications" fontSize="xs">Publications</InternalLink>
            <InternalLink href="/software" fontSize="xs">Software</InternalLink>
          </Stack>
        ) : (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >     
            <Divider orientation='vertical' ml="3"/>       
            <InternalLink href="/about">About</InternalLink>
            <InternalLink href="/blog">Blog</InternalLink>
            <InternalLink href="/cv">CV</InternalLink>
            <InternalLink href="/publications">Publications</InternalLink>
            <InternalLink href="/software">Software</InternalLink>
          </Stack>
        )}
        <Box flex={1} align="right" >
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
