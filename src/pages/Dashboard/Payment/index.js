import styled from 'styled-components';
import PaymentArea from '../../../components/Dashboard/Payment';

export default function Payment() {
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
