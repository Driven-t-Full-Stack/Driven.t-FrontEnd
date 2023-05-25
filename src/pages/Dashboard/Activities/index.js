import { useState, useEffect } from 'react';
import OnlineMsg from '../../../components/Dashboard/Activity/OnlineMsg';
import getUserTicket from '../../../hooks/api/getUserTicket';

export default function Activities() {
  const { userTicket } = getUserTicket();
  const [ticketType, setTicketType] = useState(null);

  useEffect(() => {
    if (userTicket) {
      setTicketType(userTicket.TicketType.name);          
    }        
  }, [userTicket, ticketType]);
  
  if (ticketType == 'Online') {
    return <OnlineMsg />;
  }

  return 'Atividades: Em breve!';
}
