import { HStack, Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const ArticleNavigator = ({ previousArticle, nextArticle }) => {
  const bgColor = useColorModeValue('gray.200', 'brand.primary');
  const textMode = useColorModeValue('black', 'white');
  return (
    <>
      <HStack justifyContent="space-between">
        <Text as="h2" fontSize="2xl" fontWeight="600" color={textMode}>
          More Posts
        </Text>
        <Link as={NextLink} href="/blog">
          <Text fontWeight="600" color="brand.primary">
            Browse all posts
          </Text>
        </Link>
      </HStack>
      <HStack justifyContent="space-between">
        {previousArticle !== null ? (
          <Box
            borderRadius="md"
            bgColor={bgColor}
            padding="8px 12px"
            alignItems="center"
          >
            <Link as={NextLink} href={previousArticle.slug}>
              <Text as="h2" fontSize="md" fontWeight="600" color={textMode}>
                ⬅️ Previous: {previousArticle.title}
              </Text>
            </Link>
          </Box>
        ) : null}
        {nextArticle !== null ? (
          <Box
            borderRadius="md"
            bgColor={bgColor}
            padding="8px 12px"
            alignItems="center"
            justifyContent="center"
          >
            <Link as={NextLink} href={nextArticle.slug}>
              <Text as="h2" fontSize="md" fontWeight="600" color={textMode}>
                Next: {nextArticle.title} ➡️
              </Text>
            </Link>
          </Box>
        ) : null}
      </HStack>
    </>
  );
};

export default ArticleNavigator;
