import { HStack, Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const ArticleNavigator = ({ previousArticle, nextArticle }) => {
  const bgColor = useColorModeValue('rgba(63, 138, 79, 0.065)', 'rgba(134, 163, 92, 0.09)');
  const hoverBorderColor = useColorModeValue('#3f8a4f', '#3f8a4f');

  return (
    <>
      <HStack justifyContent="space-between" alignItems="baseline">
        <Text
          as="h2"
          fontSize="2xl"
          fontFamily="heading"
          fontWeight="700"
        >
          More Posts
        </Text>
        <Link as={NextLink} href="/blog">
          <Text
            fontWeight="500"
            color="brand.primary"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="0.03em"
          >
            Browse all
          </Text>
        </Link>
      </HStack>
      <HStack justifyContent="space-between" spacing={4} flexWrap="wrap">
        {previousArticle !== null ? (
          <Box
            borderRadius="md"
            bgColor={bgColor}
            padding="12px 16px"
            borderLeft="3px solid"
            borderColor="transparent"
            transition="all 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
            _hover={{ borderColor: hoverBorderColor }}
            flex={1}
          >
            <Link as={NextLink} href={previousArticle.slug} _hover={{ textDecoration: 'none' }}>
              <Text fontSize="xs" color="brand.muted" mb={1} textTransform="uppercase" letterSpacing="0.05em">
                Previous
              </Text>
              <Text as="h2" fontSize="md" fontWeight="500">
                {previousArticle.title}
              </Text>
            </Link>
          </Box>
        ) : null}
        {nextArticle !== null ? (
          <Box
            borderRadius="md"
            bgColor={bgColor}
            padding="12px 16px"
            borderLeft="3px solid"
            borderColor="transparent"
            transition="all 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
            _hover={{ borderColor: hoverBorderColor }}
            flex={1}
            textAlign="right"
          >
            <Link as={NextLink} href={nextArticle.slug} _hover={{ textDecoration: 'none' }}>
              <Text fontSize="xs" color="brand.muted" mb={1} textTransform="uppercase" letterSpacing="0.05em">
                Next
              </Text>
              <Text as="h2" fontSize="md" fontWeight="500">
                {nextArticle.title}
              </Text>
            </Link>
          </Box>
        ) : null}
      </HStack>
    </>
  );
};

export default ArticleNavigator;
