import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/posts';
import getPost from '../data/posts/get-all-posts';

function Post() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    console.log(process.env.DB_HOST ? process.env.DB_HOST : 'não encontrado');
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
