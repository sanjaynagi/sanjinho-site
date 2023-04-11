import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Divider,
  useColorModeValue,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

import ThemeToggleButton from './ThemeToggleButton';

const LinkItem = ({ href, _target, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _hover={{
          textDecoration: 'none',
          backgroundColor: 'undefined',
          borderRadius: 8
        }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

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
        p={2}
        maxW="container.lg"
        wrap="wrap"
        as='nav'
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={4}>
            <LinkItem href="/" height="%50">
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
          </LinkItem>
        </Flex>



        {isMobile ? (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            mr="5"
          >
            <LinkItem href="/about" height="10%">About</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
            <LinkItem href="/cv">CV</LinkItem>
            <LinkItem href="/publications">Publications</LinkItem>
            <LinkItem href="/software">Software</LinkItem>
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
            <Divider orientation='vertical' />       
            <LinkItem href="/about">About</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
            <LinkItem href="/cv">CV</LinkItem>
            <LinkItem href="/publications">Publications</LinkItem>
            <LinkItem href="/software" pr="5">Software</LinkItem>
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
