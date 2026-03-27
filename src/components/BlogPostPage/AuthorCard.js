import {
  Box,
  Text,
  VStack,
  Link,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';

const AuthorCard = () => {
  const textMode = useColorModeValue('black', 'white');
  return (
    <Box
      borderRadius="md"
      padding="8px 12px"
      alignItems="center"
      border="1px solid" borderColor="brand.accent"
    >
      <HStack justifyContent="flex-start">
        <VStack alignItems="stretch" as="section" pt={2}>
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="600" color={textMode}>
              <Link href="/about">Sanjay Curtis Nagi</Link>{' '}
              <Text fontSize="sm" color="brand.primary" as="i">
                author
              </Text>
            </Text>
            <HStack justifyContent="flex-end">
              {/* <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid" borderColor="brand.accent"
              > */}
              <Link isExternal href="https://ko-fi.com/sanjaycnagi">
                <Text fontSize="13px" color="brand.primary" fontWeight="bold">
                  Buy me coffee
                </Text>
              </Link>
              {/* </Box> */}
              <Box>&nbsp;</Box>
              <Link isExternal href="https://sanjaycnagi.substack.com/">
                <Text fontSize="13px" color="brand.primary" fontWeight="bold">
                  Newsletter
                </Text>
              </Link>
              {/* </Box> */}
              <Box>&nbsp;</Box>
              {/* <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid" borderColor="brand.accent"
              > */}
              <Link isExternal href="https://twitter.com/sanjaycnagi">
                <Text fontSize="13px" color="brand.primary" fontWeight="bold">
                  Twitter
                </Text>
              </Link>
              {/* </Box> */}
            </HStack>
          </HStack>
          <Text fontSize="md" color={textMode}>
            I&apos;m a Post-Doc.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AuthorCard;
