import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function getRooms(hotelId) {
  const token = useToken();
    
  const {
    data: Rooms,
    loading: RoomssLoading,
    error: RoomssError,
    act: getHotelWithRooms
  } = useAsync(() => hotelApi.getHotelWithRooms(token, hotelId));
  
  return {
    Rooms,
    RoomssLoading,
    RoomssError,
    getHotelWithRooms
  };
}
