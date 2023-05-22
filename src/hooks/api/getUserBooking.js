import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export default function getUserBooking() {
  const token = useToken();
      
  const {
    data: userBooking,
    loading: bookingsLoading,
    error: bookingsError,
    act: getbookings
  } = useAsync(() => bookingApi.getUserBookingInfo(token));
  
  return {
    userBooking,
    bookingsLoading,
    bookingsError,
    getbookings
  };
}
