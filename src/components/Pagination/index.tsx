import { Box, Container, IconButton, makeStyles } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { PaginationData } from 'domain/pagination';
import Link from 'next/link';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export type PaginationProps = PaginationData;

function Pagination({
  nextPage,
  postsPerPage,
  numberOfPosts,
  previousPage,
  category,
}: PaginationProps) {
  const categoryName = category || '';
  const nextLink = `${nextPage}/${categoryName}`;
  const previousLink = `${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage <= postsPerPage + numberOfPosts;
  const hasPrevioustPage = previousPage >= 1;

  const classes = useStyle();

  return (
    <Container className={classes.root}>
      <Box>
        {hasPrevioustPage && (
          <Link href="/post/page/[...param]" as={previousLink} replace>
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="Voltar">
                <ArrowBackIos />
              </IconButton>
            </label>
          </Link>
        )}
      </Box>
      <Box>
        {hasNextPage && (
          <Link href={nextLink}>
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="Voltar">
                <ArrowForwardIos />
              </IconButton>
            </label>
          </Link>
        )}
      </Box>
    </Container>
  );
}

export default Pagination;
