import { VStack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import EmailLink from './EmailLink';

const ContactMe = () => {
  const mutedColor = useColorModeValue('brand.muted', 'brand.warmGray');

  return (
    <VStack spacing={3} alignItems="flex-start" w="full" as="section">
      <Heading size="lg" as="h2" fontWeight="700">
        Get in Touch
      </Heading>
      <Text color={mutedColor}>
        Feel free to reach out. You can email me at:
      </Text>
      <EmailLink />
    </VStack>
  );
};

export default ContactMe;
