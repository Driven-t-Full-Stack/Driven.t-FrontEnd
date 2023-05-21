import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../App/BookingApi';

export default function getBookings(roomId) {
  const token = useToken();
      
  const {
    data: bookings,
    loading: bookingsLoading,
    error: bookingsError,
    act: getbookings
  } = useAsync(() => bookingApi.getBookingByRoomId(roomId, token));
  
  return {
    bookings,
    bookingsLoading,
    bookingsError,
    getbookings
  };
}
