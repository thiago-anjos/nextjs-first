import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { PostData } from 'domain/posts/posts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

interface HomePageProps {
  posts: PostData[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

function HomePage({ posts }: HomePageProps) {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap" className={classes.root}>
      {posts.map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.cover.formats.thumbnail.url}
            />
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
                {item.channel}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`Categoria: ${item.category.name} • Data: ${format(
                  new Date(item.created_at),
                  'dd-MM-yyyy',
                  { locale: ptBR },
                )}`}
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
    </Grid>
  );
}

export default HomePage;
