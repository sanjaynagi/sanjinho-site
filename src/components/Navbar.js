import {
  Container,
  Box,
  HStack,
  Flex,
  useColorModeValue,
  Text,
  useMediaQuery,
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
  const [isMobile] = useMediaQuery('(max-width: 768px)');
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
        py={4}
        px={{ base: 4, md: 6 }}
        maxW="container.lg"
        as="nav"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center">
          <InternalLink href="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize={{ base: '0px', md: '22px' }}
              fontFamily="heading"
              fontWeight="700"
              color={wordmarkColor}
              letterSpacing="-0.01em"
            >
              Sanjay Curtis Nagi
            </Text>
          </InternalLink>
        </Flex>

        <HStack spacing={{ base: 1, md: 2 }} alignItems="center">
          {isMobile ? (
            <>
              <NavLink href="/about" fontSize="xs" px={2}>About</NavLink>
              <NavLink href="/blog" fontSize="xs" px={2}>Blog</NavLink>
              <NavLink href="/publications" fontSize="xs" px={2}>Pubs</NavLink>
              <NavLink href="/software" fontSize="xs" px={2}>Software</NavLink>
            </>
          ) : (
            <>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/cv">CV</NavLink>
              <NavLink href="/publications">Publications</NavLink>
              <NavLink href="/software">Software</NavLink>
            </>
          )}
          <Box pl={2}>
            <ThemeToggleButton />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
