import styled from 'styled-components';

export default function TicketModality() {
  return (
    <>
      <TicketTitle>
        <Title>Primeiro, escolha sua modalidade de ingresso</Title>

      </TicketTitle>

      <TicketSumary>
        <Summary>
          <p>
            Presencial 
            <br /> <span>R$ 250,00</span>
          </p>

        </Summary>

        <Summary>
          <p>
            Online 
            <br /> <span>R$ 100,00</span>
          </p>

        </Summary>

      </TicketSumary>

      <Payment>
        <Title>Pagamento</Title>
      </Payment>
    </>
  );
}

const TicketTitle = styled.div`
  `;

const Title = styled.h1`
flex-direction: row;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

const TicketSumary = styled.div`
 display: flex;
 flex-direction: row;
  `;

const Summary = styled.div`
  display: flex;
  width: 145px;
  height: 145px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #CECECE;
  border-radius: 20px;
  margin-bottom: 30px;
  margin-right: 24px;

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
