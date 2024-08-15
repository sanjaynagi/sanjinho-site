import React, { useEffect, useRef } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import {
  VStack,
  Heading,
  HStack,
  Text,
  Divider,
  Center
} from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';

import readingTime from 'reading-time';

import { getAllBlogPosts } from './index';
import { BlogDocumentHead, MDXComponents } from '../../src/components';
import imageMetadata from '../../src/utils/imageMetaData';
import {
  ShareArticle,
  ArticleNavigator,
  TimeToRead,
  PublishedDate,
  Tag,
} from '../../src/components/BlogPostPage';

export const readBlogPost = async slug => {
  const postPath = path.join(process.cwd(), './content/posts', `${slug}.md`);

  return await fs.readFile(postPath, 'utf8');
};

export const getStaticPaths = async () => {
  const posts = await getAllBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const slug = ctx.params.slug;

  const postContent = await readBlogPost(slug);
  const { text: timeToRead } = readingTime(postContent);
  const allPosts = await getAllBlogPosts();

  const {
    content,
    data: { title, date, tag, canonicalUrl, thumbnail }
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata]
        }
      }),
      title,
      date,
      slug,
      timeToRead,
      allPosts,
      tag,
      thumbnail,
      canonicalUrl
    }
  };
};

const BlogPostPage = ({
  title,
  date,
  source,
  timeToRead,
  tag,
  thumbnail,
  allPosts,
  canonicalUrl
}) => {
  const { query } = useRouter();
  const slug = query.slug;

  const postIndex = allPosts.findIndex(post => post.slug === slug);
  const previousArticle = allPosts[postIndex - 1] || null;
  const nextArticle = allPosts[postIndex + 1] || null;

  return (
    <>
      <BlogDocumentHead
        pageTitle={`${title}`}
        postPath={`/${slug}/`}
        canonicalUrl={canonicalUrl}
        thumbnail={thumbnail}
      />
      <VStack spacing={8} alignItems="stetch" w="full" as="section" pt={28}>
        <VStack spacing={3} alignItems="flex-start">
          {/* Post Title */}
          <Heading size="lg">{title}</Heading>
          {/* Post Meta */}
          <HStack
            divider={
              <Text color="gray.500" mx={2}>
                •
              </Text>
            }
          >
            {/* Published Date */}
            <PublishedDate date={date} />
            {/* Time to read */}
            <TimeToRead timeToRead={timeToRead} />
            {/* Tag */}
            <Tag tag={tag} />
          </HStack>
        </VStack>
        <Center>
        </Center>
        <MDXRemote {...source} components={MDXComponents} />
        {/* Share article on Twitter */}
        <HStack justifyContent="center" pt="10">
          <ShareArticle title={title} slug={slug} />
        </HStack>
        <Divider />
        {/* Article Navigator */}
        <ArticleNavigator
          previousArticle={previousArticle}
          nextArticle={nextArticle}
        />
        {/* Author Card */}
        {/* <AuthorCard /> */}
      </VStack>
    </>
  );
};

export default BlogPostPage;
