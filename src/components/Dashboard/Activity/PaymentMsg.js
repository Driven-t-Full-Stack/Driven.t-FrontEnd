import styled from 'styled-components';

export default function PaymentMsg() {
  return (
    <StyledPaymentMsg>
      <p>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</p>
    </StyledPaymentMsg>
  );
}

const StyledPaymentMsg = styled.p`
p{ 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;  
line-height: 23px;
font-size: 20px;
text-align: center;
color: #8E8E8E;
margin: 32% 26% 0% 26%;
}
`;
