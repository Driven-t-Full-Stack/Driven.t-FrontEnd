import useAsync from '../useAsync';
import useToken from '../useToken';
import * as timeApi from '../../services/timeApi';

export default function getTime(timeId) {
  const token = useToken();
      
  const {
    data: time,
    loading: timeLoading,
    error: timeError,
    act: getTime
  } = useAsync(() => timeApi.getTimeById(token, timeId));
  
  return {
    time,
    timeLoading,
    timeError,
    getTime
  };
}
