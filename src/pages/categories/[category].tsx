import { GetServerSideProps } from 'next';
import { PostData } from 'domain/posts/posts';
import HomePage from 'containers/HomePage';
import getAllPosts from 'data/posts/get-all-posts';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

function Posts({ posts, category }: CategoryProps) {
  return <HomePage posts={posts} category={category} />;
}

export default Posts;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const category = ctx.query.category ? ctx.query.category : '';
  const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category: category },
  };
};
