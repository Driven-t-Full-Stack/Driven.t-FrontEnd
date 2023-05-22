import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export default function useUpdateBooking() {
  const token = useToken();

  const {
    loading: updateBookingByIdLoading,
    error: updateBookingByIdError,
    act: updateBookingById
  } = useAsync(({ roomId, bookingId }) => bookingApi.updateBookingById(roomId, bookingId, token), false);

  return {
    updateBookingByIdLoading,
    updateBookingByIdError,
    updateBookingById
  };
}
