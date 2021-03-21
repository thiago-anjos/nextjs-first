import { PostData } from 'domain/posts/posts';
import { POSTS_URL } from 'config/app-config';
import { fetchData } from 'utils/fetch-data';
import { markdownHtml } from 'utils/markdown-to-html';

const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchData<PostData[]>(url);
  if (!jsonPosts.length) return jsonPosts;
  const content = await markdownHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};

export default getPost;
