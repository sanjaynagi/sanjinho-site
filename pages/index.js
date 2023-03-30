import { Feed } from 'feed';
import fs from 'fs';

import {
  Hero,
  ProjectsSectionList,
  LatestPostsSection,
  DocumentHead
} from '../src/components';
import { ProjectsList } from '../src/data';
import { getAllBlogPosts } from './blog';

export const getRecentBlogPosts = async () => {
  const posts = await getAllBlogPosts();

  const recentPosts = posts
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 10);

  return recentPosts;
};

const generateRssFeed = async () => {
  const posts = await getAllBlogPosts();
  const siteURL = 'https://sanjaycnagi.github.io/';
  const date = new Date();
  const author = {
    name: 'Sanjay Curtis',
    email: 'sanjay.c.nagi@gmail.com',
    link: 'https://twitter.com/sanjaycnagi'
  };

  const feed = new Feed({
    title: "Sanjay Curtis' blog",
    description: '',
    id: siteURL,
    link: siteURL,
    logo: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `2023 - ${date.getFullYear()}, Sanjay Curtis · All Rights Reserved.`,
    // updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`
    },
    author
  });

  posts.forEach(post => {
    const url = `${siteURL}/blog/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.title,
      author: [author],
      date: new Date(post.date)
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
};

export const getStaticProps = async () => {
  const posts = await getRecentBlogPosts();
  await generateRssFeed();

  const props = {
    posts
  };

  return {
    props
  };
};

const HomePage = ({ posts }) => {
  return (
    <>
      <DocumentHead pageTitle="Sanjay Curtis – Post-doc studying genomic surviellance of the major malaria mosquito." />
      <Hero />
      {/* Latest Blog Posts */}
      <LatestPostsSection posts={posts} />
      {/* Open Source Projects I've Worked on */}
      <ProjectsSectionList projects={ProjectsList} />
    </>
  );
};

export default HomePage;
