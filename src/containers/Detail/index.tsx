import React from 'react';
import { PostData } from 'domain/posts/posts';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import createMarkup from 'utils/markup-sanitize';
import Comments from 'Comments';
import Head from 'next/head';
import { removeHtml } from 'utils/remove-html';
import { SITE_NAME } from 'config/app-config';
import Link from 'next/link';
import formatDate from 'utils/formate-date';

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

  const image = post?.cover?.formats?.small?.url;
  const author = post?.author?.name;
  const category = post?.category?.name;

  return (
    <Container className={classes.root}>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>

      <Typography variant="h2" className={classes.title}>
        {post.title}
      </Typography>
      <img src={image} alt={post.title} className={classes.image} />
      <Box>
        <Typography>
          Publicado em {formatDate(post.created_at)} por {author}
        </Typography>
        {category && <Link href={`/categories/${category}`}>{category}</Link>}
      </Box>
      <Typography
        className={classes.content}
        dangerouslySetInnerHTML={createMarkup(post.content)}
      ></Typography>
      <Comments slug={post.slug} title={post.title} />
    </Container>
  );
}

export default PostDetail;
