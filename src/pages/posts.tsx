import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/posts';
import HomePage from 'containers/HomePage';
import { useState } from 'react';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('https://secure-oasis-88915.herokuapp.com/posts');
  const data = await posts.json();
  return data;
};

export type PostProps = {
  res: PostData[];
};

function Posts({ res }: PostProps) {
  return <HomePage posts={res} />;
}

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const res = await getPosts();
  return {
    props: { res },
  };
};
