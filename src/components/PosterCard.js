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
  const bgColor = useColorModeValue('rgba(26, 26, 26, 0.02)', 'rgba(232, 224, 212, 0.04)');
  const hoverBorderColor = useColorModeValue('#c45d3e', '#c45d3e');
  const iconColor = useColorModeValue('#c45d3e', '#d4a574');
  const metaColor = useColorModeValue('brand.muted', 'brand.warmGray');

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
        _hover={{ borderColor: hoverBorderColor }}
      >
        <Icon as={FaFilePdf} w={10} h={10} color={iconColor} />
        <VStack spacing={2} flex={1} alignItems="flex-start">
          <Stack
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <Heading fontSize="1rem" fontFamily="body" fontWeight="500">
              <LinkOverlay as={ExternalLink} href={pdfPath} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {title}
              </LinkOverlay>
            </Heading>
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
          <Text fontSize="sm" color={metaColor} w="full">
            {authors}
          </Text>
          <Stack
            w="full"
            direction={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ base: 'flex-start', sm: 'center' }}
          >
            <Text fontSize="sm" fontStyle="italic" color={metaColor}>
              Presented at {venue}
            </Text>
            <Badge
              variant="outline"
              borderColor="brand.primary"
              color="brand.primary"
              fontSize="xs"
              fontWeight="500"
            >
              POSTER
            </Badge>
          </Stack>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default PosterCard;
