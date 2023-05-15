import { useState } from 'react';
import styled from 'styled-components';
import SuccessfulMessage from './SuccessfulMessage';
import CreditCardData from './CreditCard';
import Summary from './Summary';

export default function PaymentArea() {
  const [isPaid, setIsPaid] = useState(false);

  return (
    <>
      <TicketSummary>
        <Title>Ingresso escolhido</Title>

        <Summary />
      </TicketSummary>

      <Payment>
        <Title>Pagamento</Title>
      </Payment>

      {isPaid ? <SuccessfulMessage /> : <CreditCardData setIsPaid={setIsPaid} />}
    </>
  );
}

const TicketSummary = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

const Payment = styled.div``;
