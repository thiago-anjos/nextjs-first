import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { PostData } from 'domain/posts/posts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core';
import Link from 'next/link';
import Head from 'next/head';
import { SITE_NAME } from 'config/app-config';

interface HomePageProps {
  posts: PostData[];
  category?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& p': {
        color: theme.palette.secondary.light,
      },
      '& span': {
        color: theme.palette.primary.main,
      },
    },
    containerItens: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
    },
    containerBox: {
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2),
    },
    thumbnail: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    link: {
      '& img': {
        cursor: 'pointer',
        transition: 'transform .2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  }),
);

function HomePage({ posts, category }: HomePageProps) {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap" className={classes.root}>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu site" />
      </Head>
      <Container className={classes.containerItens}>
        {category && <Typography>Categoria: {category}</Typography>}
        {posts.map((item, index) => (
          <Box
            key={index}
            width={210}
            marginRight={0.5}
            my={5}
            className={classes.containerBox}
          >
            {item ? (
              <Link
                href={{
                  pathname: '/post/[slug]',
                  query: { slug: item.slug },
                }}
              >
                <a className={classes.link}>
                  <img
                    alt={item.title}
                    src={item.cover.formats.thumbnail.url}
                    className={classes.thumbnail}
                  />
                </a>
              </Link>
            ) : (
              <Skeleton variant="rect" width={210} height={118} />
            )}
            {item ? (
              <Box pr={2}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="caption"
                  color="textSecondary"
                >
                  {item.author ? item.author.name : 'Sem autor'}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {`Categoria: ${
                    item.category ? item.category.name : 'Sem categoria'
                  } • Data: ${format(new Date(item.created_at), 'dd-MM-yyyy', {
                    locale: ptBR,
                  })}`}
                </Typography>
              </Box>
            ) : (
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Container>
    </Grid>
  );
}

export default HomePage;
