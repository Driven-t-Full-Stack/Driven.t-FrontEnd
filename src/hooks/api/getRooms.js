import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function getRooms(hotelId) {
  const token = useToken();
    
  const {
    data: Hotel,
    loading: HotelsLoading,
    error: HotelError,
    act: getHotelWithRooms
  } = useAsync(() => hotelApi.getHotelWithRooms(token, hotelId));
  
  return {
    Hotel,
    HotelsLoading,
    HotelError,
    getHotelWithRooms
  };
}
