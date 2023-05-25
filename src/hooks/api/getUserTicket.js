import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketApi';

export default function getUserTicket() {
  const token = useToken();
 
  const {
    data: userTicket,
    loading: ticketLoading,
    error: tickerError,
    act: getTicket,
  } = useAsync(() => ticketApi.getUserTicketInfo(token));

  return {
    userTicket,
    ticketLoading,
    tickerError,
    getTicket,
  };
}
