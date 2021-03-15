import { PostData } from 'domain/posts/posts';
import { POSTS_URL } from 'config/app-config';
import { fetchData } from 'utils/fetch-data';

const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fetchData<PostData[]>(url);
  return posts;
};

export default getAllPosts;
