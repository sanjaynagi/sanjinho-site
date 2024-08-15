import Head from 'next/head';

const siteURL = 'https://sanjaycnagi.com';
const author = 'Sanjay Curtis Nagi';
const shortname = 'sanjaycnagi';
const description =
  "I'm Sanjay Curtis Nagi. Researcher. Welcome to my blog!";
const socialBanner = '/card.png';

const BlogDocumentHead = ({ pageTitle, postPath, canonicalUrl, thumbnail }) => {
  let postUrl = `${siteURL}`;

  if (postPath) {
    postUrl = `${siteURL}${postPath}/`;
  }

  pageTitle = pageTitle.substring(0, 65);

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="#5fb0a1" name="theme-color" />
      <meta content="#5fb0a1" name="msapplication-TileColor" />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta content={description} name="description" />
      <meta name="author" content={author} />
      <meta name="author" content={shortname} />
      <meta name="publisher" content={author} />
      <meta
        name="keywords"
        content="Sanjay Curtis Nagi, sanjaycnagi, genomics, malaria, blog, Next.js, React"
      />

      <meta name="robots" content="index,follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteURL}${thumbnail}`} />
      <meta property="og:image:alt" content="Blog post thumbnail" />
      <meta property="og:url" content={postPath ? postUrl : siteURL} />
      <meta property="og:type" content={postPath ? 'article' : 'website'} />
      <meta property="og:site_name" content="Sanjay's blog" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={shortname} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteURL}${thumbnail}`} />
    </Head>
  );
};

export default BlogDocumentHead;
