import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../domain/posts/posts';
import PostDetail from 'containers/Detail';

const getPosts = async ({ id }): Promise<PostData> => {
  const posts = await fetch(
    `https://secure-oasis-88915.herokuapp.com/posts/${id}`,
  );
  const data = await posts.json();
  return data;
};

export type PostProps = {
  res: PostData;
};

function Post({ res }: PostProps) {
  return <PostDetail post={res} />;
}

export default Post;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await getPosts({ id: params.id });
  return {
    props: { res },
    revalidate: 10, // In seconds
  };
};
