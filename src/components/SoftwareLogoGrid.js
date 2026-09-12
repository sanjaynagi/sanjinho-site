import {
  Box,
  Grid,
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

// The logos range from near-square marks to wordmarks five times wider than
// they are tall. Rather than squeeze them all into one box, each tile claims a
// share of the grid that suits its shape, so every logo can be scaled up to a
// similar optical weight instead of a wide one stranding itself on its own row.
const span = ratio => (ratio < 2.2 ? 'narrow' : 'wide');

const SPANS = {
  narrow: { base: 1, md: 2, lg: 2 },
  wide: { base: 2, md: 4, lg: 3 },
};

const ROW_HEIGHT = { base: 92, md: 124 };

// A 2-span and a 3-span tile can never fill a six-column row between them, so
// group the shapes: three narrow tiles fill a row exactly, as do two wide ones.
// Order within each group is preserved, keeping the newest projects first.
const orderByShape = projects => [
  ...projects.filter(p => span(p.ratio) === 'narrow'),
  ...projects.filter(p => span(p.ratio) === 'wide'),
];

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

const SoftwareTile = ({ title, description, href, logo, ratio }) => {
  // Several logos ship with a white matte. A single near-white plate in both
  // themes, plus multiply blending, lets those mattes dissolve into the tile
  // so the wall reads as one surface instead of a patchwork of boxes.
  const plateBg = useColorModeValue('#fdfefb', 'rgba(232, 240, 228, 0.94)');
  const plateBorder = useColorModeValue(
    'rgba(46, 110, 58, 0.18)',
    'rgba(158, 196, 106, 0.24)'
  );
  const colSpan = SPANS[span(ratio)];

  return (
    <LinkBox
      as="article"
      role="group"
      gridColumn={{
        base: `span ${colSpan.base}`,
        md: `span ${colSpan.md}`,
        lg: `span ${colSpan.lg}`,
      }}
      h={ROW_HEIGHT}
      position="relative"
      rounded="lg"
      overflow="hidden"
      bg={plateBg}
      border="1px solid"
      borderColor={plateBorder}
      transition="all 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
      _hover={{
        transform: 'translateY(-3px)',
        shadow: '0 16px 32px -12px rgba(46, 110, 58, 0.5)',
        borderColor: 'brand.primary',
      }}
      _focusWithin={{
        transform: 'translateY(-3px)',
        borderColor: 'brand.primary',
      }}
    >
      <Flex align="center" justify="center" h="full" w="full" px={6} py={5}>
        {logo ? (
          <Image
            src={logo}
            alt={`${title} logo`}
            w="full"
            h="full"
            objectFit="contain"
            sx={{ mixBlendMode: 'multiply' }}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 0.1 }}
          />
        ) : (
          <Box transition="opacity 0.3s ease" _groupHover={{ opacity: 0.1 }}>
            <LogoWordmark title={title} />
          </Box>
        )}
      </Flex>

      {/* Detail overlay — hidden until the tile is hovered or focused. */}
      <VStack
        position="absolute"
        inset={0}
        spacing={1}
        px={4}
        justify="center"
        textAlign="center"
        bg="rgba(18, 44, 25, 0.93)"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
        _focusWithin={{ opacity: 1 }}
        // Touch devices never hover, so reveal the detail there permanently.
        sx={{ '@media (hover: none)': { opacity: 1 } }}
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
          lineHeight="1.45"
          noOfLines={4}
        >
          {description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

const SoftwareLogoGrid = ({ projects }) => {
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

      <Grid
        w="full"
        gap={4}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        // Dense packing backfills the gap that a mixed run of wide and narrow
        // tiles would otherwise leave at the end of a row.
        autoFlow="dense"
      >
        {orderByShape(projects).map(project => (
          <SoftwareTile key={project.id} {...project} />
        ))}
      </Grid>
    </VStack>
  );
};

export default SoftwareLogoGrid;
