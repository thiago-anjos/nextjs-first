import { POSTS_URL } from 'config/app-config';
import { fetchData } from 'utils/fetch-data';

const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchData<string>(url);
  return numberOfPosts;
};

export default countAllPosts;
