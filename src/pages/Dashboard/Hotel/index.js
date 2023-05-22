import { useState, useEffect } from 'react';
import styled from 'styled-components';
import HotelsArea from '../../../components/Dashboard/Hotel';
import HotelNotAllowed from '../../../components/Dashboard/Hotel/hotelNotAllowed';
import getUserTicket from '../../../hooks/api/getUserTicket';

export default function Hotel() {
  const [ ticket, setTicket ] = useState(null);  
  const { userTicket } = getUserTicket();

  useEffect(() => {
    if (userTicket) {
      setTicket( userTicket );
    }
  }, [userTicket]);
  
  if (!ticket || ticket.status === 'RESERVED') return (
    <HotelAreaContainer>
      <Title>Escolha de hotel e quarto</Title>
      <HotelNotAllowed error="No paid ticket"></HotelNotAllowed>
    </HotelAreaContainer>
  );
  
  if (!ticket.TicketType.includesHotel) return (
    <HotelAreaContainer>
      <Title>Escolha de hotel e quarto</Title>
      <HotelNotAllowed error="invalid ticket"></HotelNotAllowed>
    </HotelAreaContainer>
  );

  return (
    <HotelAreaContainer>
      <Title>Escolha de hotel e quarto</Title>
      <HotelsArea />
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
 color: #000000;
 height: auto;
 margin-bottom: 35px;
`;
