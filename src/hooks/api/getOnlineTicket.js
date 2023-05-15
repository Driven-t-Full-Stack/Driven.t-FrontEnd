import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function getOnlineTicket() {
  const token = useToken();

  const {
    data: onlineTicket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket,
  } = useAsync(() => ticketApi.getOnlineTicketInfo(token));

  return {
    onlineTicket,
    ticketLoading,
    ticketError,
    getTicket,
  };
}
