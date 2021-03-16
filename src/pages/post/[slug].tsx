import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../domain/posts/posts';
import PostDetail from 'containers/Detail';
import getAllPosts from 'data/posts/get-all-posts';
import countAllPosts from 'data/posts/count-all-posts';
import getPost from 'data/posts/get-post';

export type PostProps = {
  post: PostData;
};

function Post({ post }: PostProps) {
  return <PostDetail post={post} />;
}

export default Post;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })), //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback 404
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPost(context.params.slug);
  return {
    props: { post: posts[0] },
    revalidate: 10, // In seconds
  };
};
