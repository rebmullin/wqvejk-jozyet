import { guid } from '@progress/kendo-react-common';

const baseData = [
  {
    Start: '2020-06-24T11:30:00.000Z',
    End: '2020-06-24T12:00:00.000Z',
    isAllDay: false,
    sessionID: 'e31b1cf3-cc2c-490d-8c5a-5106afeecbd9',
  },
];

const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate) => {
  const date = new Date(eventDate);
  date.setFullYear(currentYear);
  return date;
};

export const sampleDataWithCustomSchema = baseData.map((dataItem) => ({
  ...dataItem,
  sessionID: guid(),
  title: dataItem.Title,
  Start: parseAdjust(dataItem.Start),
  End: parseAdjust(dataItem.End),
}));
