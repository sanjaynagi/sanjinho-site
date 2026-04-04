import Link from 'next/link';
import Image from 'next/image';
import {
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  HStack,
  Stack,
  Box,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react';

import TimeToRead from './BlogPostPage/TimeToRead';
import PublishedDate from './BlogPostPage/PublishedDate';

const BlogPostCard = ({ title, shorttitle, date, slug, thumbnail, timeToRead }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const hoverBg = useColorModeValue('rgba(26, 26, 26, 0.03)', 'rgba(232, 224, 212, 0.04)');
  const borderColor = useColorModeValue('transparent', 'transparent');
  const hoverBorderColor = useColorModeValue('#c45d3e', '#c45d3e');
  const metaColor = useColorModeValue('brand.muted', 'brand.warmGray');

  return (
    <LinkBox as="article">
      <Stack
        direction="row"
        p={4}
        spacing={{ base: 4, md: 5 }}
        rounded="md"
        alignItems="center"
        borderLeft="3px solid"
        borderColor={borderColor}
        transition="all 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
        _hover={{
          borderColor: hoverBorderColor,
          backgroundColor: hoverBg
        }}
      >
        {isMobile ? null : (
          <Box flexShrink={0} borderRadius="6px" overflow="hidden" opacity={0.85}>
            <Image src={thumbnail} alt={`${shorttitle} thumbnail`} width={32} height={32} />
          </Box>
        )}
        <VStack w="full" alignItems="stretch" spacing={1}>
          <LinkOverlay as={Link} href={`/blog/${slug}`}>
            <Text
              as="h2"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="500"
              lineHeight="1.4"
            >
              {shorttitle}
            </Text>
          </LinkOverlay>
          <HStack
            spacing={0}
            divider={
              <Text color={metaColor} mx={2} fontSize="xs">
                /
              </Text>
            }
          >
            <PublishedDate date={date} />
            <TimeToRead timeToRead={timeToRead} />
          </HStack>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default BlogPostCard;
