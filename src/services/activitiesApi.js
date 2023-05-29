import api from './api';

export async function getActvitiesInfo(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });  

  return response.data;
}

export async function getActvitiesDates(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  const filteredResponse = [...new Set(response.data.map(item => item.date))];  

  return filteredResponse;  
}
