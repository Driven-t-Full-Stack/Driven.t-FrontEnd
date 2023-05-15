import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

export default function SuccessfulMessage() {
  return (
    <SuccessfulPaymentMessage>
      <AiFillCheckCircle style={{ color: '#36B853', fontSize: '44px' }} />
      <h1>
        <strong>Pagamento Confirmado! </strong> <br />
        Prossiga para a escolha de hospedagem e atividades
      </h1>
      <p></p>
    </SuccessfulPaymentMessage>
  );
}

const SuccessfulPaymentMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin-left: 12px;

    color: #000;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
  }
`;
