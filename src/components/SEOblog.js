import Head from 'next/head';

const siteURL = 'https://sanjaycnagi.com';
const author = 'Sanjay Curtis Nagi';
const shortname = 'sanjaycnagi';
const defaultDescription =
  "I'm Sanjay Curtis Nagi. Researcher. Welcome to my blog!";
const socialBanner = '/card.png';

const BlogDocumentHead = ({ pageTitle, postPath, canonicalUrl, thumbnail, shorttitle, date }) => {
  const postUrl = postPath ? `${siteURL}${postPath}/` : siteURL;
  const canonical = canonicalUrl || postUrl;
  const ogImage = thumbnail ? `${siteURL}${thumbnail}` : `${siteURL}${socialBanner}`;

  pageTitle = pageTitle.substring(0, 65);

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="#5fb0a1" name="theme-color" />
      <meta content="#5fb0a1" name="msapplication-TileColor" />
      <link rel="canonical" href={canonical} />

      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta content={defaultDescription} name="description" />
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

      <meta property="og:title" content={shorttitle || pageTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Blog post thumbnail" />
      <meta property="og:url" content={postUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Sanjay's blog" />
      {date && <meta property="article:published_time" content={new Date(date).toISOString()} />}
      <meta property="article:author" content={author} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={shorttitle || pageTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: shorttitle || pageTitle,
            image: ogImage,
            url: canonical,
            ...(date && { datePublished: new Date(date).toISOString() }),
            author: {
              '@type': 'Person',
              name: author,
              url: siteURL,
            },
          }),
        }}
      />
    </Head>
  );
};

export default BlogDocumentHead;
