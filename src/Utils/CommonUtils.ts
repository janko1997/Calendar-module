import moment from 'moment';

export const formatToFriendlyDate = (date: string): string => {
  const now = new Date();
  const taskDate = new Date(date);
  const timeDifference = taskDate.getTime() - now.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = oneDay * 7;

  if (timeDifference < oneDay) {
    return 'today';
  } else if (timeDifference < oneDay * 2) {
    return 'tomorrow';
  } else if (timeDifference < oneWeek) {
    const days = Math.round(timeDifference / oneDay);
    return `in ${days} days`;
  } else {
    return moment(taskDate).format('DD/MM/YYYY');
  }
};
