import useAsync from '../hooks/useAsync';
import useToken from '../hooks/useToken';
import * as ticketApi from './ticketApi';

export default function getReservedTicket() {
  const token = useToken();

  const {
    data: reservedTicket,
    loading: ticketLoading,
    error: tickerError,
    act: getTicket,
  } = useAsync(() => ticketApi.getReservedTicketInfo(token));

  return {
    reservedTicket,
    ticketLoading,
    tickerError,
    getTicket,
  };
}
