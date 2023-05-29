import api from './api';

export async function getTimeById(token, timeId) {
  const response = await api.get(`/time/${timeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
