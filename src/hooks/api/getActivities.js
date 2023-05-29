import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activitiesApi from '../../services/activitiesApi';

export default function getActivities() {
  const token = useToken();
      
  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getAllActivities
  } = useAsync(() => activitiesApi.getActivities(token));
  
  return {
    activities,
    activitiesLoading,
    activitiesError,
    getAllActivities
  };
}
