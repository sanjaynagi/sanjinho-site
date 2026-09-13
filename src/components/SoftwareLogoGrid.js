import {
  Box,
  Flex,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ExternalLink from './ExternalLink';

// Justified layout, as a photo gallery lays out mixed-shape pictures.
//
// Each tile is given `aspect-ratio: <logo ratio>` and flexes in proportion to
// that ratio, so the tiles sharing a row divide the width between them by shape
// and all resolve to the same height — a square mark gets a square tile, a
// wordmark five times wider than tall gets a tile to match. Because the tile is
// the logo's shape, a logo that is a solid block of its own can fill it edge to
// edge with no whitespace at all.
//
// Row membership is stated in the data rather than left to flex wrapping, so
// the page can be composed deliberately. It also sets scale: a row's height is
// the width divided by the total of its ratios, so a row of fewer or narrower
// logos is a taller row and draws its logos larger.
const TARGET_HEIGHT = { base: 76, md: 104 };
// One narrow logo alone on a row would otherwise stretch to the full width and
// tower over everything. Capping each tile's width at its ratio times this
// height bounds any row's height; a row that then cannot fill the width is
// centred instead.
const MAX_HEIGHT = { base: 130, md: 200 };

const LogoWordmark = ({ title }) => (
  <Text
    fontFamily="heading"
    fontSize={{ base: 'xl', md: '3xl' }}
    fontWeight="600"
    color="leaf.deep"
    letterSpacing="-0.01em"
    textAlign="center"
    px={4}
  >
    {title}
  </Text>
);

const SoftwareTile = ({ title, description, href, logo, ratio, fullBleed }) => {
  // A flat mark needs a plate to sit on and room to breathe. A logo that is
  // already a solid block of its own needs neither, so it fills the tile.
  const plateBg = useColorModeValue('#fdfefb', 'rgba(232, 240, 228, 0.94)');
  const plateBorder = useColorModeValue(
    'rgba(46, 110, 58, 0.18)',
    'rgba(158, 196, 106, 0.24)'
  );

  return (
    <LinkBox
      as="article"
      role="group"
      flexGrow={ratio}
      flexShrink={1}
      // On a wide screen the basis is zero, so the row's width is split purely
      // in proportion to shape. Narrow screens keep a real basis so a row of
      // several logos can still wrap rather than shrink to nothing.
      flexBasis={{ base: `${ratio * TARGET_HEIGHT.base}px`, md: 0 }}
      minW={{ base: '110px', md: '140px' }}
      maxW={{
        base: `${ratio * MAX_HEIGHT.base}px`,
        md: `${ratio * MAX_HEIGHT.md}px`,
      }}
      sx={{ aspectRatio: String(ratio) }}
      position="relative"
      rounded="lg"
      overflow="hidden"
      bg={fullBleed ? 'transparent' : plateBg}
      border={fullBleed ? 'none' : '1px solid'}
      borderColor={fullBleed ? undefined : plateBorder}
      transition="all 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
      _hover={{
        transform: 'translateY(-3px)',
        shadow: '0 16px 32px -12px rgba(46, 110, 58, 0.5)',
      }}
      _focusWithin={{ transform: 'translateY(-3px)' }}
    >
      <Flex
        align="center"
        justify="center"
        h="full"
        w="full"
        px={fullBleed ? 0 : 5}
        py={fullBleed ? 0 : 4}
      >
        {logo ? (
          <Image
            src={logo}
            alt={`${title} logo`}
            w="full"
            h="full"
            objectFit={fullBleed ? 'fill' : 'contain'}
            // Multiply dissolves the white matte a flat mark ships with into
            // the plate. A full-bleed logo carries its own colour, so leave it.
            sx={fullBleed ? undefined : { mixBlendMode: 'multiply' }}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 0.1 }}
          />
        ) : (
          <Box transition="opacity 0.3s ease" _groupHover={{ opacity: 0.1 }}>
            <LogoWordmark title={title} />
          </Box>
        )}
      </Flex>

      {/* Detail overlay — desktop only, hidden until the tile is hovered or
          focused. Mobile has no hover to reveal it, so the tile there shows
          just the logo. */}
      <VStack
        display={{ base: 'none', md: 'flex' }}
        position="absolute"
        inset={0}
        spacing={1}
        px={3}
        justify="center"
        textAlign="center"
        bg="rgba(18, 44, 25, 0.93)"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
        _focusWithin={{ opacity: 1 }}
      >
        <Heading
          as="h3"
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="700"
          color="#eaf3dd"
          lineHeight="1.2"
        >
          <LinkOverlay
            as={ExternalLink}
            href={href}
            color="#eaf3dd"
            textDecoration="none"
            _hover={{ color: '#eaf3dd', textDecoration: 'none' }}
          >
            {title}
          </LinkOverlay>
        </Heading>
        <Text
          fontSize={{ base: '2xs', md: 'xs' }}
          color="rgba(226, 235, 221, 0.88)"
          lineHeight="1.4"
          noOfLines={4}
        >
          {description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

// Resolve the configured rows of titles into rows of projects. Anything the
// configuration misses still gets shown, in a row at the end.
const toRows = (projects, rows = []) => {
  const byTitle = new Map(projects.map(p => [p.title, p]));
  const resolved = rows
    .map(row => row.map(title => byTitle.get(title)).filter(Boolean))
    .filter(row => row.length);
  const placed = new Set(resolved.flat());
  const rest = projects.filter(p => !placed.has(p));
  return rest.length ? [...resolved, rest] : resolved;
};

const SoftwareLogoGrid = ({ projects, rows }) => {
  return (
    <VStack w="full" alignItems="center" spacing={8} as="section" mt={16}>
      <VStack spacing={3}>
        <Heading size="lg" fontWeight="700" textAlign="center">
          Open Source Software
        </Heading>
        <Button
          leftIcon={<FaGithub />}
          color="brand.primary"
          size="md"
          variant="ghost"
          fontFamily="body"
          fontWeight="500"
          _hover={{ bg: 'rgba(51, 118, 63, 0.12)' }}
        >
          <Link href="https://github.com/sanjaynagi">GitHub</Link>
        </Button>
      </VStack>

      <VStack w="full" spacing={4}>
        {toRows(projects, rows).map((row, i) => (
          <Flex
            key={`row-${i}`}
            w="full"
            gap={4}
            align="flex-start"
            justify="center"
            wrap={{ base: 'wrap', md: 'nowrap' }}
          >
            {row.map(project => (
              <SoftwareTile key={project.id} {...project} />
            ))}
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
};

export default SoftwareLogoGrid;
