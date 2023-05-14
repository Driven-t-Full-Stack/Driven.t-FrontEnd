import styled from 'styled-components';

export default function HotelNotAllowed() {
  const noPaymentWarning = 'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades';
  const noHotelWarning = 'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades';

  return <>
    <Text>
      <Text>{noPaymentWarning}</Text>
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
`;
