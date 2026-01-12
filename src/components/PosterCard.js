import {
  VStack,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  Badge,
  useColorModeValue
} from '@chakra-ui/react';
import { FaFilePdf } from 'react-icons/fa';
import ExternalLink from './ExternalLink';

const PosterCard = ({
  id,
  title,
  authors,
  year,
  venue,
  pdfPath
}) => {
  const bgColorStack = useColorModeValue('transparent', 'blue.100');
  const iconColor = useColorModeValue('#89b5a2', 'blue.200');

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
        <Icon as={FaFilePdf} w={12} h={12} color={iconColor} />
        <VStack spacing={3} flex={1}>
          <VStack w="full" spacing={2}>
            <Stack
              w="full"
              direction={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'flex-start', md: 'space-between' }}
              alignItems={{ base: 'flex-start', md: 'center' }}
            >
              <Heading size="md" fontWeight="semibold" >
                <LinkOverlay as={ExternalLink} href={pdfPath} color="gray.600">
                  {title}
                </LinkOverlay>
              </Heading>
              <Badge colorScheme="blue" variant="subtle">
                {year}
              </Badge>
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
              <Text fontSize="sm" fontStyle="italic">
                Presented at {venue}
              </Text>
              <Badge colorScheme="blue" variant="outline" size="sm">
                POSTER
              </Badge>
            </Stack>
          </VStack>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default PosterCard;