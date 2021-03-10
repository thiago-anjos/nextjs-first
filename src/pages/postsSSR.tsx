import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/posts';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('https://secure-oasis-88915.herokuapp.com/posts');
  const data = await posts.json();
  return data;
};

export type PostProps = {
  res: PostData[];
};

function Posts({ res }: PostProps) {
  return (
    <div>
      <ul>
        {res.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const res = await getPosts();
  return {
    props: { res },
  };
};
