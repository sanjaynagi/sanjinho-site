import {
  VStack,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  Badge,
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
  const bgColorStack = useColorModeValue('gray.100', 'blue.100');
  const doiUrl = `https://doi.org/${doi}`;

  return (
    <LinkBox as="article">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        p={5}
        spacing={{ base: 8, md: 5 }}
        bg={bgColorStack}
        rounded="md"
        alignItems="center"
        transitionProperty="transform"
        transitionDuration="slow"
        transitionTimingFunction="ease-out"
        _hover={{ transform: 'scale(1.025, 1.025)' }}
      >
        {journalLogo && (
          <Image
            src={journalLogo}
            alt={`${journal} logo`}
            w={20}
            h={20}
            objectFit="contain"
            fallback={
              <Badge colorScheme="blue" fontSize="sm" p={2}>
                {journal}
              </Badge>
            }
          />
        )}
        <VStack spacing={3} flex={1}>
          <VStack w="full" spacing={2}>
            <Stack
              w="full"
              direction={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'flex-start', md: 'space-between' }}
              alignItems={{ base: 'flex-start', md: 'center' }}
            >
              <Heading fontSize="1.1rem" fontWeight="semibold">
                <LinkOverlay as={ExternalLink} href={doiUrl} color="gray.600" _hover={{ textDecoration: 'none' }}>
                  {title}
                </LinkOverlay>
              </Heading>
            </Stack>
            <Text fontSize="sm" color="gray.600" w="full">
              {authors}
            </Text>
            <Stack
              w="full"
              direction={{ base: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-start', sm: 'center' }}
            >
              <Text fontSize="xs" color="gray.600">
                DOI: {doi}
              </Text>
              <Badge colorScheme="blue" variant="subtle">
                {year}
              </Badge>
            </Stack>
          </VStack>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default PublicationCard;