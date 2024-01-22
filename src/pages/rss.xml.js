import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({data}) =>  import.meta.env.DEV || !data?.draft)
  return rss({
    title: 'Thiago Granata | Blogfolio',
    description: 'Programación, SEO, Accesibilidad.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>es</language>`,
    stylesheet: '/pretty-feed-v3.xsl',
  })
}

