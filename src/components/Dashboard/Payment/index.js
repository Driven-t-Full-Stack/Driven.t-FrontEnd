import styled from 'styled-components';

export default function PaymentArea() {
  return (
    <>
      <TicketSummary>
        <Title>Ingresso escolhido</Title>

        <Summary>
          <p>
            Presencial + Com Hotel
            <br /> <span>R$ 600</span>
          </p>
        </Summary>
      </TicketSummary>

      <Payment>
        <Title>Pagamento</Title>
      </Payment>
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

const Summary = styled.div`
  width: 290px;
  height: 110px;
  background-color: #ffeed2;
  border-radius: 20px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: #898989;
    }
  }
`;

const Payment = styled.div``;
