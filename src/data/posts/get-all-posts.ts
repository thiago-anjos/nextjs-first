import { PostData } from 'domain/posts/posts';
import { POSTS_URL } from 'config/app-config';
import { fetchData } from 'utils/fetch-data';

const getPost = async (): Promise<PostData[]> => {
  const posts = await fetchData<PostData[]>(POSTS_URL);
  return posts;
};

export default getPost;
