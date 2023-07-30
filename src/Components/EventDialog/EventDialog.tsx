import React from 'react';
import { Dialog, Grid, Paper, Typography } from '@mui/material';
import { Divider } from '@material-ui/core';
import { Event } from '../../Models/EventModel';
import moment from 'moment';
import { useStyles } from './styles';
import { saveAs } from 'file-saver';
import DynamicHTMLComponent from '../DynamicHTMLComponent/DynamicHTMLComponent ';

interface TaskDialogProps {
  open: boolean;
  event: Event | null;
  onClose: () => void;
}

const EventDialog: React.FC<TaskDialogProps> = ({ open, event, onClose }) => {
  const classes = useStyles();
  if (!event) return null;

  const generateICSContent = (event: Event) => {
    const eventTitle = event.Title;
    const eventDescription = event.Description;
    const eventStartDate = moment(event.EventEndDate).format('DD/MM/YYYY');
    const eventEndDate = moment(event.EventEndDate).format('DD/MM/YYYY');

    const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}
  DTSTART:${eventStartDate.replace(/[-:.]/g, '')}
  DTEND:${eventEndDate.replace(/[-:.]/g, '')}
  SUMMARY:${eventTitle}
  DESCRIPTION:${eventDescription}
  END:VEVENT
  END:VCALENDAR
    `;

    return new Blob([icsContent], { type: 'text/calendar' });
  };

  const handleDownloadICS = (event: Event) => {
    const icsBlob = generateICSContent(event);
    saveAs(icsBlob, 'event.ics');
  };

  return (
    <Dialog className={classes.rootDialog} maxWidth='lg' fullWidth open={open} onClose={onClose}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <div style={{ height: '80vh' }}>
            <Grid item container direction='row'>
              <Grid item xs={12}>
                <img src={event.BannerUrl} style={{ height: '369px', width: '800px' }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: 10, marginLeft: 30 }}>
                <Typography>
                  <b>Description</b>
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginLeft: 20 }}>
                <DynamicHTMLComponent htmlContent={event.Description} />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item container direction='column' xs={12} sm={4}>
          <Grid item>
            <div style={{ height: '40vh', background: 'lightgrey' }}>
              <Grid item container spacing={1} direction='row'>
                <Grid item className={classes.eventStartDate} xs={12}>
                  <div>{moment(event.EventStartDate).format('MMM')}</div>
                  <div>{moment(event.EventStartDate).format('DD')}</div>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.typographyTitle}>{event.Title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.typographyMeeting}>Meeting</Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div style={{ height: '40vh' }}>
              <Grid item container direction='row' style={{ marginTop: 15, marginLeft: 20 }}>
                <Grid item xs={12}>
                  <Typography>
                    <b>Date and Time</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                  <Typography>
                    {moment(event.EventStartDate).format('ddd, DD MMM YYYY')} - Full day Event
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                  <span
                    onClick={() => {
                      handleDownloadICS(event);
                    }}
                    className={classes.link}
                  >
                    Add to Calendar
                  </span>
                </Grid>
              </Grid>

              <Grid item container direction='row' style={{ marginTop: 50, marginLeft: 20 }}>
                <Grid item xs={12}>
                  <Typography>
                    <b>Location</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                  <div>{event.AddressLine1}</div>
                  <div>{event.City}</div>
                  <div>{event.PostCode}</div>
                  <div>{event.Country}</div>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                  <span className={classes.link}>View Map</span>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item container direction='row' className={classes.datesFooter}>
          <Grid item xs={12}>
            <div>
              Created by {event.Author} on {moment(event.Created).format('DD/MM/YYYY')} at{' '}
              {moment(event.Created).format('HH:mm')}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              Modified by {event.Editor} on {moment(event.Modified).format('DD/MM/YYYY')} at{' '}
              {moment(event.Modified).format('HH:mm')}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
export default EventDialog;
