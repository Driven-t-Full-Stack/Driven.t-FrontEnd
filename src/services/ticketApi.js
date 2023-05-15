import api from './api';

export async function getReservedTicketInfo(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.data.status === 'RESERVED') return response.data;

  return {};
}

export async function getOnlineTicketInfo(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const filteredResponse = response.data.filter((obj) => obj.name === 'Online');

  return filteredResponse[0];
}

export async function getTicketWithOutHotelInfo(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const filteredResponse = response.data.filter((obj) => obj.name === 'Presencial + Sem Hotel');

  return filteredResponse[0];
}

export async function getTicketWithHotelInfo(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const filteredResponse = response.data.filter((obj) => obj.name === 'Presencial + Com Hotel');

  return filteredResponse[0];
}
