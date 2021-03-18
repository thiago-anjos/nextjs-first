import React from 'react';
import { PostData } from 'domain/posts/posts';
import { Container, makeStyles, Typography } from '@material-ui/core';
import createMarkup from 'utils/markup-sanitize';
import DateAvatar from 'components/Date';
import Comments from 'Comments';
interface HomePageProps {
  post: PostData;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },
  title: {
    color: theme.palette.secondary.light,
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  image: {
    width: '400px',
    height: 'auto',
  },
}));

function PostDetail({ post }: HomePageProps) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {post.title}
      </Typography>
      <img
        src={post.cover.formats.medium.url}
        alt={post.title}
        className={classes.image}
      />
      <DateAvatar date={post.created_at} />
      <Typography
        className={classes.content}
        dangerouslySetInnerHTML={createMarkup(post.content)}
      ></Typography>
      <Comments slug={post.slug} title={post.title} />
    </Container>
  );
}

export default PostDetail;
