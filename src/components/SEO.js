import Head from 'next/head';

const siteURL = 'https://sanjaycnagi.com';
const author = 'Sanjay Curtis Nagi';
const shortname = 'sanjaycnagi';
const description =
  "I'm Sanjay Curtis Nagi. Researcher. Welcome to my personal website and blog!";
const socialBanner = '/card.png';

const DocumentHead = ({ pageTitle, postPath, canonicalUrl }) => {
  let postUrl = `${siteURL}`;

  if (postPath) {
    postUrl = `${siteURL}${postPath}/`;
  }

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
      <meta name="og:description" content={description} />
      <meta name="og:image" content={`${siteURL}${socialBanner}`} />
      <meta name="og:image:alt" content="Site social banner" />
      <meta property="og:url" content={postPath ? postUrl : siteURL} />
      <meta property="og:type" content={postPath ? 'article' : 'website'} />
      <meta property="og:site_name" content="Sanjay C Nagi's personal site" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={shortname} />
      <meta name="twitter:title" content="Sanjay C Nagi's personal website" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}${socialBanner}`} />
    </Head>
  );
};

export default DocumentHead;
