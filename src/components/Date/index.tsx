import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { AccessTime } from '@material-ui/icons';
import formatDate from 'utils/formate-date';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);
export default function DateAvatar({ date }: { date: string }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        avatar={
          <Avatar>
            <AccessTime />
          </Avatar>
        }
        color="primary"
        label={formatDate(date)}
        variant="default"
      />
    </div>
  );
}
