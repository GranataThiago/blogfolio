import { z, defineCollection, reference } from 'astro:content';

const categories = defineCollection({
  type: 'data',
  schema: z.object({
      name: z.string()
  })
});

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
      title: z.string(),
      author: z.string(),
      date: z.date().transform((str) => new Date(str)),
      preview: image(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      relatedPosts: z.array(reference('posts')),
      categories: z.array(z.string()).optional(),
      draft: z.boolean().default(true)
  })
});


export const collections = {
  'posts': postsCollection,
  'categories': categories
};