import { GetStaticProps } from 'next';
import { PostData } from 'domain/posts/posts';
import HomePage from 'containers/HomePage';
import getAllPosts from 'data/posts/get-all-posts';

export type PostProps = {
  res: PostData[];
};

function Posts({ res }: PostProps) {
  return <HomePage posts={res} />;
}

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAllPosts('_sort=id:desc&_start=0&_limit=30');
  return {
    props: { res },
    // revalidate: 600,  // Eu não preciso atualizar este blog (por isso comentei)
  };
};
