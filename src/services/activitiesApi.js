import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

// export async function getPersonalInformations(token) {
//     const response = await api.get('/enrollments', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
  
//     return response.data;
//   }

// export async function getBookingByRoomId(roomId, token) {
//   const response = await api.get(`/booking/getBooking/${roomId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
  
//   return response.data;
// }

// export async function getUserBookingInfo(token) {
//   const response = await api.get('/booking', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// }

// export async function updateBookingById(roomId, bookingId, token) {
//   console.log(token);
//   const response = await api.put(`/booking/${bookingId}`, { roomId: roomId }, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }
