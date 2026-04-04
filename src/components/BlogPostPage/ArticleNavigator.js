import { HStack, Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

const ArticleNavigator = ({ previousArticle, nextArticle }) => {
  const bgColor = useColorModeValue('rgba(26, 26, 26, 0.03)', 'rgba(232, 224, 212, 0.05)');
  const hoverBorderColor = useColorModeValue('#c45d3e', '#c45d3e');

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
