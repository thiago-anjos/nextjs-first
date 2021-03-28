import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../domain/posts/posts';
import PostDetail from 'containers/Detail';
import getAllPosts from 'data/posts/get-all-posts';
import countAllPosts from 'data/posts/count-all-posts';
import getPost from 'data/posts/get-post';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';
import Error from 'next/error';

export type PostProps = {
  post: PostData;
};

function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Typography>Carregando...</Typography>;
  }

  if (!post?.title) return <Error statusCode={404} />;

  return <PostDetail post={post} />;
}

export default Post;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const numberOfPosts = await countAllPosts();

  const posts = await getAllPosts(`_limit=${numberOfPosts}`);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })), //indicates that no page needs be created at build time
    // fallback: false, //indicates the type of fallback 404
    fallback: true, // now comes the routes.isfallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPost(context.params.slug);

  // fix error on page/post
  const post = posts.length > 0 ? posts[0] : {};

  return {
    // props: { post: posts[0] },
    props: { post: post },
    revalidate: 60, // In seconds
  };
};
