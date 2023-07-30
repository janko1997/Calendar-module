import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      marginRight: 190,
    },
    icon: {
      marginRight: '0.3rem',
    },
    heading: {
      margin: 0,
      fontSize: '20px',
      fontWeight: 600,
    },
    tableCell: {
      '&.css-1ex1afd-MuiTableCell-root': {
        color: 'rgb(3,120,124)',
        lineHeight: '1.1',
        borderBottom: 'none',
        cursor: 'pointer',
      },
      '&:hover': {
        color: 'rgb(213,17,31)',
        backgroundColor: 'rgb(237,235,233)',
      },
    },
  })
);
