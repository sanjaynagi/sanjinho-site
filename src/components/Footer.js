import {
  Stack,
  VStack,
  Divider,
  Link,
  Center,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react';

import ContactIcons from './ContactIcons';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const linkColor = useColorModeValue('gray.600', 'white');
  const textMode = useColorModeValue('gray.500', 'gray.500');

  return (
    <VStack pb={8} as="footer" alignItems="center">
      <Divider />

      <Stack
        w="full"
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
      <ContactIcons />
      </Stack>
      <Center><Link href="/" color='grey' fontSize="14px">Home</Link></Center>
    </VStack>
  );
};

export default Footer;
