import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePaymentData() {
  const token = useToken();

  const {
    loading: paymentDataLoading,
    error: paymentDataError,
    act: paymentData
  } = useAsync((data) => paymentApi.insertPayment(data, token), false);

  return {
    paymentDataLoading,
    paymentDataError,
    paymentData
  };
}
