import {
  Box,
  SimpleGrid,
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

const LogoFallback = ({ title }) => {
  const bgGradient = useColorModeValue(
    'linear(to-br, rgba(196, 93, 62, 0.06), rgba(107, 143, 113, 0.08))',
    'linear(to-br, rgba(196, 93, 62, 0.12), rgba(107, 143, 113, 0.15))'
  );
  const textColor = useColorModeValue('brand.primary', '#e8a08c');
  const accentColor = useColorModeValue(
    'rgba(196, 93, 62, 0.15)',
    'rgba(196, 93, 62, 0.25)'
  );

  return (
    <Box
      w="full"
      h="full"
      bgGradient={bgGradient}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative circle */}
      <Box
        position="absolute"
        top="-20%"
        right="-15%"
        w="60%"
        h="60%"
        borderRadius="full"
        bg={accentColor}
        filter="blur(20px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        w="40%"
        h="40%"
        borderRadius="full"
        bg={accentColor}
        filter="blur(16px)"
      />
      <Text
        fontSize="xl"
        fontFamily="heading"
        fontWeight="700"
        color={textColor}
        letterSpacing="-0.02em"
        position="relative"
        zIndex={1}
        textAlign="center"
        px={3}
      >
        {title}
      </Text>
    </Box>
  );
};

const SoftwareTile = ({ title, description, href, logo }) => {
  const bgColor = useColorModeValue(
    'rgba(26, 26, 26, 0.02)',
    'rgba(232, 224, 212, 0.04)'
  );
  const borderColor = useColorModeValue(
    'rgba(26, 26, 26, 0.06)',
    'rgba(232, 224, 212, 0.08)'
  );
  const hoverBorderColor = useColorModeValue('#c45d3e', '#c45d3e');
  const descColor = useColorModeValue('brand.muted', 'brand.warmGray');
  const hoverBg = useColorModeValue(
    'rgba(26, 26, 26, 0.04)',
    'rgba(232, 224, 212, 0.06)'
  );

  return (
    <LinkBox as="article" role="group">
      <VStack
        spacing={0}
        bg={bgColor}
        rounded="lg"
        overflow="hidden"
        border="1px solid"
        borderColor={borderColor}
        transition="all 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
        _hover={{
          borderColor: hoverBorderColor,
          bg: hoverBg,
          transform: 'translateY(-3px)',
          shadow: 'lg',
        }}
        h="full"
      >
        {/* Logo area */}
        <Box
          w="full"
          h="140px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={5}
          overflow="hidden"
        >
          {logo ? (
            <Image
              src={logo}
              alt={`${title} logo`}
              maxH="100px"
              maxW="85%"
              objectFit="contain"
              transition="transform 0.3s ease"
              _groupHover={{ transform: 'scale(1.05)' }}
            />
          ) : (
            <LogoFallback title={title} />
          )}
        </Box>

        {/* Text area */}
        <VStack spacing={1.5} p={4} pt={2} flex={1} w="full" alignItems="center">
          <Heading
            size="sm"
            fontFamily="body"
            fontWeight="600"
            textAlign="center"
            lineHeight="1.3"
          >
            <LinkOverlay
              as={ExternalLink}
              href={href}
              _hover={{ textDecoration: 'none' }}
              textDecoration="none"
            >
              {title}
            </LinkOverlay>
          </Heading>
          <Text
            fontSize="xs"
            color={descColor}
            textAlign="center"
            lineHeight="1.6"
            noOfLines={3}
          >
            {description}
          </Text>
        </VStack>
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
          _hover={{ bg: 'rgba(196, 93, 62, 0.08)' }}
        >
          <Link href="https://github.com/sanjaynagi">GitHub</Link>
        </Button>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={5}
        w="full"
      >
        {projects.map((project) => (
          <SoftwareTile key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default SoftwareLogoGrid;
