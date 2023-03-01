import Prismic from "@prismicio/client";
const API_ENDPOINT = import.meta.env.PUBLIC_API_ENDPOINT;

const client = Prismic.createClient(API_ENDPOINT, {
  accessToken: import.meta.env.API_KEY,
});

export async function getBlogPosts() {
  return await client.getAllByType("blog_post");
}

export async function getSinglePost(uuid: string) {
  return await client.getByUID("blog_post", uuid);
}

export async function getCases() {
  return await client.getAllByType("case_study");
}

export async function getSingleCase(uuid: string) {
  return await client.getByUID("case_study", uuid);
}

export async function getPage(page: string) {
  return client.getByType(page);
}
