import { Container } from '@material-ui/core';
import { SITE_URL } from 'config/app-config';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  slug: string;
  title: string;
};

function Comments({ slug, title }: CommentsProps) {
  return (
    <>
      <Container>
        <DiscussionEmbed
          shortname="blog-nextjs-1"
          config={{
            url: `${SITE_URL}/post/${slug}`,
            identifier: slug,
            title: title,
            language: 'pt_BR',
          }}
        />
      </Container>
    </>
  );
}

export default Comments;
