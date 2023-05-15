import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function getHotels() {
  const token = useToken();
    
  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels
  } = useAsync(() => hotelApi.getHotels(token));
  
  console.log(hotels);
  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels
  };
}
  
