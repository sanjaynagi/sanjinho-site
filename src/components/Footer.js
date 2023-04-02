import {
  Stack,
  VStack,
  Divider,
  Link,
  Text,
  useColorModeValue,
  HStack,
  useMediaQuery
} from '@chakra-ui/react';

import ContactIcons from './ContactIcons';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const linkColor = useColorModeValue('gray.600', 'white');
  const textMode = useColorModeValue('gray.500', 'gray.500');

  return (
    <VStack pb={8} as="footer" alignItems="flex-start">
      <Divider />

      <Stack
        w="full"
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
      <ContactIcons />
      </Stack>
    </VStack>
  );
};

export default Footer;
