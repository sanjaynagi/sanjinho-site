import { Box, Stack, VStack, Heading, Text } from '@chakra-ui/react';
import EmailLink from './EmailLink';

const ContactMe = () => {
  return (
    <>
      <VStack spacing={3} alignItems="flex-start" w="full" as="section">
      <Heading size="lg" as="h1" textAlign="left" >
              Contact Me!
            </Heading>
            <Text>Feel free to get in touch. You can email me at: </Text>
          <EmailLink />
      </VStack>
    </>
  );
};

export default ContactMe;