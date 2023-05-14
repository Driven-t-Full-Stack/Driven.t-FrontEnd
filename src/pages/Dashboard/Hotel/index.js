import styled from 'styled-components';
import HotelArea from '../../../components/Dashboard/Hotel';
import HotelNotAllowed from '../../../components/Dashboard/Hotel/hotelNotAllowed';
import getTicketWithHotel from '../../../hooks/api/getTicketWithHotel';

export default function Hotel() {
  const { ticket } = getTicketWithHotel();
  console.log(ticket);
  if (!ticket || ticket.status !== 'PAID') return (
    <HotelAreaContainer>
      <Title>Escolha de hotel e quarto</Title>

      <HotelNotAllowed error="No paid ticket"></HotelNotAllowed>
    </HotelAreaContainer>
  );

  return (
    <HotelAreaContainer>
      <Title>Escolha de hotel e quarto</Title>

      <HotelArea />
    </HotelAreaContainer>
  );
}

const HotelAreaContainer = styled.div`
  width: 100%;
  height: 100%;
  
`;

const Title = styled.h1`
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 34px;
 line-height: 40px;
 /* identical to box height */
 color: #000000;

  height: auto;
  margin-bottom: 35px;
`;
