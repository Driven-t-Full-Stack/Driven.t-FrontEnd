import api from './api';

export async function bookingRoom(body, token) {
  const response = await api.get('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
