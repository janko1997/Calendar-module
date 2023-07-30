import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  scrollableContainer: {
    maxHeight: 300,
    overflowY: 'auto',
    padding: 10,

    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
      borderRadius: 4,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },
  },
}));
