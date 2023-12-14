import * as builder from 'xmlbuilder';

import client from 'utils/client';

const site = 'https://curative.com';

const buildUrlObject = (slug, updatedAt) => ({
  loc: { '#text': `${site}${slug}` },
  lastmod: { '#text': updatedAt.split('T')[0] },
  changefreq: { '#text': 'daily' },
  priority: { '#text': '1.0' },
});

const Sitemap = () => null;

export const getServerSideProps = async ({ res, locale }) => {
  const pages = await client.getEntries({
    content_type: 'page',
    include: 10,
    limit: 1000,
    locale,
  });

  const blogListing = (
    await client.getEntries({
      content_type: 'templateBlog',
      include: 10,
      'fields.internalName': 'Blog - Main Data',
      limit: 1,
      locale,
    })
  ).items[0];

  const pressListing = (
    await client.getEntries({
      content_type: 'templatePress',
      include: 10,
      'fields.internalName': 'Press - Main Data',
      limit: 1,
      locale,
    })
  ).items[0];

  const blogs = await client.getEntries({
    content_type: 'blogPost',
    include: 10,
    limit: 1000,
    locale,
  });

  const press = await client.getEntries({
    content_type: 'templatePressPost',
    include: 10,
    limit: 1000,
    locale,
  });

  const feedObject = {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      '@xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
      url: [],
    },
  };

  for (const item of pages.items) {
    if (typeof item.fields.slug !== 'undefined' && !item.fields.seo?.fields?.no_index) {
      feedObject.urlset.url.push(
        buildUrlObject(`${item.fields.slug === 'homepage' ? '/' : item.fields.slug}`, item.sys.updatedAt),
      );
    }
  }

  if (!blogListing.fields.seo.no_index) {
    feedObject.urlset.url.push(buildUrlObject('/blog', blogListing.sys.updatedAt));
  }

  for (const item of blogs.items) {
    if (typeof item.fields.slug !== 'undefined' && !item.fields.seo?.fields?.no_index) {
      feedObject.urlset.url.push(buildUrlObject(`/blog/${item.fields.slug}`, item.sys.updatedAt));
    }
  }

  if (!pressListing.fields.seo.no_index) {
    feedObject.urlset.url.push(buildUrlObject('/press', pressListing.sys.updatedAt));
  }

  for (const item of press.items) {
    if (typeof item.fields.slug !== 'undefined' && !item.fields.externalLink && !item.fields.seo?.fields?.no_index) {
      feedObject.urlset.url.push(buildUrlObject(`/press/${item.fields.slug}`, item.sys.updatedAt));
    }
  }
  const sitemap = builder.create(feedObject, { encoding: 'utf-8' });
  if (res) {
    res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');
    res.setHeader('Content-Type', 'application/xml');
    res.statusCode = 200;
    res.end(sitemap.end({ pretty: true }));
  }

  return {
    props: {},
  };
};

export default Sitemap;
