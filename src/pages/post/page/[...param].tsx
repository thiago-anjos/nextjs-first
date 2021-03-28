import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from 'domain/posts/posts';
import HomePage from 'containers/HomePage';
import getAllPosts from 'data/posts/get-all-posts';
import { useRouter } from 'next/router';
import { PaginationData } from 'domain/pagination';
import countAllPosts from 'data/posts/count-all-posts';

export type PageProps = {
  post: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function Page({ post, category, pagination }: PageProps) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;
  if (!post.length) return <div>Página não encontrada...</div>;
  return <HomePage posts={post} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params.param[0]);
  const category = context.params.param[1] || '';
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;
  const categoryQuery = category && `&category.name=${category}`;

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    postsPerPage,
    previousPage,
    category,
    numberOfPosts,
  };

  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`;
  const post = await getAllPosts(urlQuery);
  return {
    props: { post, pagination, category },
    revalidate: 60, // Eu não preciso atualizar este blog (por isso comentei)
  };
};
