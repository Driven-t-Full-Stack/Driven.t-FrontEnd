import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getReservedTicket from '../../../hooks/api/getReservedTicket';

export default function Summary({ setSummaryTicketId }) {
  const [reservedTicketData, setReservedTicketData] = useState({ name: '', price: '' });
  const { reservedTicket } = getReservedTicket();

  useEffect(() => {
    if (reservedTicket) {
      setSummaryTicketId(reservedTicket.id);
      setReservedTicketData({ name: reservedTicket.TicketType.name, price: reservedTicket.TicketType.price });
    }
  }, [reservedTicket]);

  return (
    <SummaryContainer>
      <p>
        {reservedTicketData.name}
        <br /> <span>R$ {reservedTicketData.price}</span>
      </p>
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
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
