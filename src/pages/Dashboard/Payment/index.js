import styled from 'styled-components';
import PaymentArea from '../../../components/Dashboard/Payment';
import NotSubscribedMsg from '../../../components/Dashboard/Payment/NotSubscribedMsg';

import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  if (!enrollment) {
    return(
      <NotSubscribedMsg />
    );
  }

  return (
    <TransactionAreaContainer>
      <TicketAndPaymentTitle>Ingresso e pagamento</TicketAndPaymentTitle>

      <PaymentArea />
    </TransactionAreaContainer>
  );
}

const TransactionAreaContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TicketAndPaymentTitle = styled.h1`
  font-size: 34px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #000;

  height: auto;
  margin-bottom: 35px;
`;
