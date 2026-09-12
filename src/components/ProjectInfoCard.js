import {
  VStack,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { SiExpo, SiGithub } from 'react-icons/si';
import ExternalLink from './ExternalLink';

const ProjectInfoCard = ({
  id,
  title,
  description,
  href,
  expoIcon,
  githubIcon
}) => {
  const bgColor = useColorModeValue('rgba(63, 138, 79, 0.055)', 'rgba(134, 163, 92, 0.08)');
  const hoverBorderColor = useColorModeValue('#3f8a4f', '#3f8a4f');
  const iconColor = useColorModeValue('#5f7561', '#a3b6a4');

  return (
    <LinkBox as="article">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        p={6}
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
        {expoIcon && (
          <Icon as={SiExpo} w={7} h={7} color={iconColor} display="inline" />
        )}
        {githubIcon && (
          <Icon as={SiGithub} w={7} h={7} color={iconColor} display="inline" />
        )}
        <VStack spacing={2} alignItems="center" flex={1} w="full">
          <Stack
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            <Heading size="md" fontFamily="body" fontWeight="600" textAlign="center">
              {title}
            </Heading>
            <LinkOverlay as={ExternalLink} href={href} />
          </Stack>
          <Text fontSize="sm" color="brand.muted" lineHeight="1.7" textAlign="center">
            {description}
          </Text>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default ProjectInfoCard;
