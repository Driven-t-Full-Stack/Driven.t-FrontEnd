import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function getTicketWithHotel() {
  const token = useToken();
  
  const {
    data: onsiteTicketHotel,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket
  } = useAsync(() => ticketApi.getTicketWithHotelInfo(token));
  
  return {
    onsiteTicketHotel,
    ticketLoading,
    ticketError,
    getTicket
  };
}
