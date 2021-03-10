import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/posts';

const getPost = async (): Promise<PostData[]> => {
  const post = await fetch('https://secure-oasis-88915.herokuapp.com/posts');
  const data = await post.json();
  return data;
};

function Post() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getPost().then((response) => setPosts(response));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
