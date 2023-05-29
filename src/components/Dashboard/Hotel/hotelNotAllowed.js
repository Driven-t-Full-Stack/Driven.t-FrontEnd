import styled from 'styled-components';

export default function HotelNotAllowed(props) {
  const noPaymentWarning = 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem';
  const noHotelWarning = 'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades';
  let warning;
  if (props.error === 'No paid ticket') {
    warning = noPaymentWarning;
  } else {
    warning = noHotelWarning;
  }

  return <>
    <Text>
      <Text>{warning}</Text>
    </Text>
  </>;
}

const Text = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #8E8E8E;
display: flex;
align-items: center;
justify-content: center;
margin: 17% 0% 20% 10%;
width: 70%;
`;
