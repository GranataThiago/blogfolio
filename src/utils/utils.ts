import { getCollection } from "astro:content";

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getPublishedPosts = async() => {
  const posts = await getCollection('posts', ({data}) =>  import.meta.env.DEV || !data?.draft);

  return posts;
}