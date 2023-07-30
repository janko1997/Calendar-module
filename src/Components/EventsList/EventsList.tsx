import React, { useCallback, useEffect, useState } from 'react';
import { formatToFriendlyDate } from '../../Utils/CommonUtils';
import { getEvents } from './EventsListService';
import { Event } from '../../Models/EventModel';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Icon,
  TableRow,
  CircularProgress,
} from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useStyles } from './styles';
import EventDialog from '../EventDialog/EventDialog';

const EventsList: React.FC = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const getEventsData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getEvents();
      const result = response.data.value.map((event: Event) => event);
      setEvents(result);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await getEventsData();
    })();
  }, []);

  const handleTaskClick = (event: Event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Icon className={classes.icon} component={CalendarTodayOutlinedIcon} />
        <h2 className={classes.heading}>Upcoming Events</h2>
      </div>
      {loading ? (
        <CircularProgress style={{ margin: '2rem' }} />
      ) : (
        <TableContainer style={{ maxWidth: 380 }}>
          <Table>
            <TableBody>
              {events.map((event, index) => (
                <TableRow
                  key={event.ID}
                  onClick={() => handleTaskClick(event)}
                  style={{
                    backgroundColor: index % 2 === 0 ? 'WhiteSmoke' : 'white',
                  }}
                >
                  <TableCell component='th' scope='row' className={classes.tableCell}>
                    {event.Title} - {formatToFriendlyDate(event.EventStartDate)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <EventDialog open={openDialog} event={selectedEvent} onClose={() => setOpenDialog(false)} />
    </div>
  );
};

export default EventsList;
