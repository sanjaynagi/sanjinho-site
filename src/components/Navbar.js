import {
  Container,
  Box,
  HStack,
  Flex,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

import InternalLink from './InternalLink';
import ThemeToggleButton from './ThemeToggleButton';

const NavLink = ({ href, children, ...props }) => {
  const hoverColor = useColorModeValue('brand.primary', 'brand.primary');
  const color = useColorModeValue('brand.muted', 'brand.warmGray');
  return (
    <InternalLink
      href={href}
      fontSize="sm"
      fontWeight="400"
      letterSpacing="0.04em"
      textTransform="uppercase"
      color={color}
      _hover={{ color: hoverColor, textDecoration: 'none' }}
      px={3}
      py={1}
      {...props}
    >
      {children}
    </InternalLink>
  );
};

const Navbar = props => {
  const bgColor = useColorModeValue('rgba(255, 255, 242, 0.85)', 'rgba(28, 25, 23, 0.85)');
  const borderColor = useColorModeValue('rgba(26, 26, 26, 0.06)', 'rgba(232, 224, 212, 0.06)');
  const wordmarkColor = useColorModeValue('#1a1a1a', '#e8e0d4');

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      css={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      zIndex={10}
      borderBottom="1px solid"
      borderColor={borderColor}
      {...props}
    >
      <Container
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        py={{ base: 2, md: 4 }}
        px={{ base: 4, md: 6 }}
        maxW="container.lg"
        as="nav"
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent="space-between"
      >
        <Flex align="center" justify="space-between" w={{ base: '100%', md: 'auto' }}>
          <InternalLink href="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize={{ base: '18px', md: '22px' }}
              fontFamily="heading"
              fontWeight="700"
              color={wordmarkColor}
              letterSpacing="-0.01em"
            >
              Sanjay Curtis Nagi
            </Text>
          </InternalLink>
          <Box display={{ base: 'block', md: 'none' }} pl={2}>
            <ThemeToggleButton />
          </Box>
        </Flex>

        <HStack spacing={{ base: 1, md: 2 }} alignItems="center" mt={{ base: 1, md: 0 }}>
          <NavLink href="/about" fontSize={{ base: 'xs', md: 'sm' }} px={{ base: 2, md: 3 }}>About</NavLink>
          <NavLink href="/blog" fontSize={{ base: 'xs', md: 'sm' }} px={{ base: 2, md: 3 }}>Blog</NavLink>
          <NavLink href="/cv" display={{ base: 'none', md: 'inline-flex' }}>CV</NavLink>
          <NavLink href="/publications" fontSize={{ base: 'xs', md: 'sm' }} px={{ base: 2, md: 3 }}>
            <Box as="span" display={{ base: 'none', md: 'inline' }}>Publications</Box>
            <Box as="span" display={{ base: 'inline', md: 'none' }}>Pubs</Box>
          </NavLink>
          <NavLink href="/software" fontSize={{ base: 'xs', md: 'sm' }} px={{ base: 2, md: 3 }}>Software</NavLink>
          <Box pl={2} display={{ base: 'none', md: 'block' }}>
            <ThemeToggleButton />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
