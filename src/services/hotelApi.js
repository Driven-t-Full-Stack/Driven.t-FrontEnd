import api from './api';

export async function getHotels(token) {
  const response = await api.get('/Hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getHotelWithRooms(token, hotelId) {
  const response = await api.get(`/Hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
