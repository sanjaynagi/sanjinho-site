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
  useColorModeValue
} from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';

import readingTime from 'reading-time';

import { getAllBlogPosts } from './index';
import { BlogDocumentHead, MDXComponents } from '../../src/components';
import imageMetadata from '../../src/utils/imageMetaData';
import {
  ArticleNavigator,
  TimeToRead,
  PublishedDate,
  Tag,
} from '../../src/components/BlogPostPage';

const UtterancesComments = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.childNodes.length > 0) return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'sanjaynagi/sanjinho-site');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    el.appendChild(script);
  }, []);

  return <div ref={ref} />;
};

export const readBlogPost = async (slug) => {
  const mdPath = path.join(process.cwd(), './content/posts', `${slug}.md`);
  const mdxPath = path.join(process.cwd(), './content/posts', `${slug}.mdx`);

  try {
    return await fs.readFile(mdPath, 'utf8');
  } catch {
    return await fs.readFile(mdxPath, 'utf8');
  }
};

export const getStaticPaths = async () => {
  const posts = await getAllBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking"
  };
};

export const getStaticProps = async ctx => {
  const slug = ctx.params.slug;

  const postContent = await readBlogPost(slug);
  const { text: timeToRead } = readingTime(postContent);
  const allPosts = await getAllBlogPosts();

  const {
    content,
    data: { title, date, tag, canonicalUrl, thumbnail, shorttitle }
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
      shorttitle,
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
  shorttitle,
  allPosts,
  canonicalUrl
}) => {
  const { query } = useRouter();
  const slug = query.slug;
  const metaColor = useColorModeValue('brand.muted', 'brand.warmGray');

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
        shorttitle={shorttitle}
        date={date}
      />
      <VStack spacing={8} alignItems="stetch" w="full" as="section" pt={28}>
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="lg" fontWeight="700" lineHeight="1.2">
            {title}
          </Heading>
          <HStack
            spacing={0}
            divider={
              <Text color={metaColor} mx={2} fontSize="sm">
                /
              </Text>
            }
          >
            <PublishedDate date={date} />
            <TimeToRead timeToRead={timeToRead} />
            <Tag tag={tag} />
          </HStack>
        </VStack>
        <MDXRemote {...source} components={MDXComponents} />
        <UtterancesComments />
        <Divider />
        <ArticleNavigator
          previousArticle={previousArticle}
          nextArticle={nextArticle}
        />
      </VStack>
    </>
  );
};

export default BlogPostPage;
