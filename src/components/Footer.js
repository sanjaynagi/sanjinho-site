import {
  VStack,
  HStack,
  Divider,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import InternalLink from './InternalLink';
import ContactIcons from './ContactIcons';

const Footer = () => {
  const mutedColor = useColorModeValue('brand.muted', 'brand.warmGray');

  return (
    <VStack pb={8} pt={4} as="footer" spacing={5} alignItems="center">
      <Divider />
      <ContactIcons />
      <HStack spacing={6}>
        <InternalLink href="/" color={mutedColor} fontSize="13px" _hover={{ color: 'brand.primary' }}>
          Home
        </InternalLink>
        <InternalLink href="/about" color={mutedColor} fontSize="13px" _hover={{ color: 'brand.primary' }}>
          About
        </InternalLink>
        <InternalLink href="/blog" color={mutedColor} fontSize="13px" _hover={{ color: 'brand.primary' }}>
          Blog
        </InternalLink>
      </HStack>
    </VStack>
  );
};

export default Footer;
