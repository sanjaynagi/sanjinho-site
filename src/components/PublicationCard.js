import {
  VStack,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  Badge,
  Box,
  useColorModeValue
} from '@chakra-ui/react';
import ExternalLink from './ExternalLink';

const PublicationCard = ({
  id,
  title,
  authors,
  year,
  journal,
  journalLogo,
  doi
}) => {
  const bgColor = useColorModeValue('rgba(26, 26, 26, 0.02)', 'rgba(232, 224, 212, 0.04)');
  const hoverBorderColor = useColorModeValue('#c45d3e', '#c45d3e');
  const metaColor = useColorModeValue('brand.muted', 'brand.warmGray');
  const doiUrl = `https://doi.org/${doi}`;

  return (
    <LinkBox as="article">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        p={5}
        spacing={{ base: 5, md: 5 }}
        bg={bgColor}
        rounded="md"
        alignItems={{ base: 'flex-start', md: 'center' }}
        borderLeft="3px solid"
        borderColor="transparent"
        transition="all 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
        _hover={{
          borderColor: hoverBorderColor
        }}
      >
        {journalLogo && (
          <Box flexShrink={0}>
            <Image
              src={journalLogo}
              alt={`${journal} logo`}
              w={16}
              h={16}
              objectFit="contain"
              opacity={0.7}
              fallback={
                <Badge colorScheme="orange" fontSize="xs" px={2} py={1}>
                  {journal}
                </Badge>
              }
            />
          </Box>
        )}
        <VStack spacing={2} flex={1} alignItems="flex-start">
          <Heading fontSize="1rem" fontFamily="body" fontWeight="500" lineHeight="1.5">
            <LinkOverlay as={ExternalLink} href={doiUrl} _hover={{ textDecoration: 'none' }} textDecoration="none">
              {title}
            </LinkOverlay>
          </Heading>
          <Text fontSize="sm" color={metaColor} lineHeight="1.6">
            {authors}
          </Text>
          <Stack
            w="full"
            direction={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ base: 'flex-start', sm: 'center' }}
            spacing={2}
          >
            <Text fontSize="xs" color={metaColor} fontFamily="mono">
              {doi}
            </Text>
            <Badge
              bg="brand.primary"
              color="white"
              fontSize="xs"
              px={2}
              py={0.5}
              borderRadius="full"
              fontWeight="500"
            >
              {year}
            </Badge>
          </Stack>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default PublicationCard;
