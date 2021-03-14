import React from 'react';
import { PostData } from 'domain/posts/posts';
import { Container, makeStyles, Typography } from '@material-ui/core';

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
    marginTop: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
  content: {
    paddingTop: theme.spacing(2),
  },
}));

function PostDetail({ post }: HomePageProps) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {post.title}
      </Typography>
      <img src={post.cover.formats.large.url} alt={post.title} />
      <Typography className={classes.content}>{post.content}</Typography>
    </Container>
  );
}

export default PostDetail;
