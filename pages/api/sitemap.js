import { getAllBlogPosts } from '../blog';

const siteURL = 'https://sanjaycnagi.com';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about/', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/', priority: '0.9', changefreq: 'weekly' },
  { path: '/publications/', priority: '0.8', changefreq: 'monthly' },
  { path: '/software/', priority: '0.8', changefreq: 'monthly' },
  { path: '/cv/', priority: '0.7', changefreq: 'monthly' },
];

export default async function handler(req, res) {
  const posts = await getAllBlogPosts();

  const blogEntries = posts.map(post => ({
    path: `/blog/${post.slug}/`,
    priority: '0.7',
    changefreq: 'yearly',
    lastmod: new Date(post.date).toISOString().split('T')[0],
  }));

  const allEntries = [...staticPages, ...blogEntries];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    entry => `  <url>
    <loc>${siteURL}${entry.path}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
      entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.status(200).send(sitemap);
}
