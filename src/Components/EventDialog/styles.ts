import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: '100%',
    },
    divider: {
      backgroundColor: '#686868',
      margin: '14px 20px 10px 20px',
    },
    datesFooter: {
      '&.css-1f064cs-MuiGrid-root': {
        marginBottom: '20px',
        marginLeft: '20px',
      },
    },
    typographyTitle: {
      '&.css-ahj2mt-MuiTypography-root': {
        marginLeft: '5px',
        fontWeight: 600,
      },
    },
    typographyMeeting: {
      '&.css-ahj2mt-MuiTypography-root': {
        fontWeight: 200,
        fontSize: '14px',
        marginLeft: '5px',
        marginTop: '125px',
      },
    },
    eventStartDate: {
      '&.css-1idn90j-MuiGrid-root': {
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '110px',
        fontWeight: 500,
        fontSize: 15,
      },
    },
    link: {
      cursor: 'pointer',
      color: 'rgb(3,120,124)',
      '&:hover': {
        color: 'rgb(213,17,31)',
      },
    },
    dateAndTime: {
      '&.css-1f064cs-MuiGrid-root': {
        marginTop: '10px',
      },
    },
    rootDialog: {
      '& .MuiDialog-paper': {
        overflow: 'hidden',
      },
    },
  })
);
