import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function getTicketWithOutHotel() {
  const token = useToken();
  
  const {
    data: onsiteTicketNoHotel,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket
  } = useAsync(() => ticketApi.getTicketWithOutHotelInfo(token));
  
  return {
    onsiteTicketNoHotel,
    ticketLoading,
    ticketError,
    getTicket
  };
}
