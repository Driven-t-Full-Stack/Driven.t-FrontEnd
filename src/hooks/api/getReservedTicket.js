import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketApi';

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
