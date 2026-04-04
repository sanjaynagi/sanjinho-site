import {
  VStack,
  Heading,
  List,
  ListItem,
  Text,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';

import InternalLink from './InternalLink';
import BlogPostCard from './BlogPostCard';

const LatestPostsSection = ({ posts }) => {
  const seeAllColor = useColorModeValue('brand.primary', 'brand.primary');

  return (
    <VStack
      w="full"
      alignItems="flex-start"
      justifyContent="center"
      as="section"
      spacing={6}
    >
      <HStack justifyContent="space-between" alignItems="baseline" w="full">
        <Heading size="lg" fontWeight="700">
          Latest Posts
        </Heading>
        <InternalLink href="/blog" p={0}>
          <Text fontSize="sm" color={seeAllColor} fontWeight="500" letterSpacing="0.03em" textTransform="uppercase">
            See all
          </Text>
        </InternalLink>
      </HStack>
      <List spacing={2} w="full">
        {posts.map(post => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default LatestPostsSection;
