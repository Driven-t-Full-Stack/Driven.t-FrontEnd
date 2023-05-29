import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ActivitiesComponent from '../../../components/Dashboard/Activities';
import OnlineMsg from '../../../components/Dashboard/Activity/OnlineMsg';
import PaymentMsg from '../../../components/Dashboard/Activity/PaymentMsg';
import getUserTicket from '../../../hooks/api/getUserTicket';
  
export default function Activities() {
  const { userTicket } = getUserTicket();
  const [ticketType, setTicketType] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    if (userTicket) {
      setTicketType(userTicket.TicketType.name);
      setPaymentStatus(userTicket.status);          
    }          
  }, [userTicket, ticketType, paymentStatus]);

  if (ticketType === 'Online') {
    return <OnlineMsg />;
  }
  if (paymentStatus === 'RESERVED') {
    return <PaymentMsg />;
  } 

  return (
    <ActivitiesArea>
      <Title>Escolha de atividades</Title>
      <ActivitiesComponent></ActivitiesComponent>
    </ActivitiesArea>
  );
}

const ActivitiesArea = styled.div`
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
