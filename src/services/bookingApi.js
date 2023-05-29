import api from './api';

export async function bookingRoom(body, token) {
  const response = await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getBookingByRoomId(roomId, token) {
  const response = await api.get(`/booking/getBooking/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}

export async function getUserBookingInfo(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateBookingById(roomId, bookingId, token) {
  console.log(token);
  const response = await api.put(`/booking/${bookingId}`, { roomId: roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
