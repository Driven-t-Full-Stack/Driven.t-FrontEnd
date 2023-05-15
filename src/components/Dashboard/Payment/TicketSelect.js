import { useState, useEffect } from 'react';
import styled from 'styled-components';
import getOnlineTicket from '../../../hooks/api/getOnlineTicket';
import getTicketWithOutHotel from '../../../hooks/api/getTicketWithOutHotel';
import getTicketWithHotel from '../../../hooks/api/getTicketWithHotel';
import useEnrollment from '../../../hooks/api/useEnrollment';
import axios from 'axios';

export default function TicketModality(props) {
  const [onlinePrice, setOnlinePrice] = useState(undefined);
  const [onsiteNoHotelPrice, setOnsiteNoHotelPrice] = useState(undefined);
  const [onsiteHotelPrice, setOnsiteHotelPrice] = useState(undefined);
  const [onlinePriceId, setOnlinePriceId] = useState(undefined);
  const [onsiteNoHotelPriceId, setOnsiteNoHotelPriceId] = useState(undefined);
  const [onsiteHotelPriceId, setOnsiteHotelPriceId] = useState(undefined);

  const { onlineTicket } = getOnlineTicket();
  const { onsiteTicketNoHotel } = getTicketWithOutHotel();
  const { onsiteTicketHotel } = getTicketWithHotel();
  const [selectedDivsBlock1, setSelectedDivsBlock1] = useState([]);
  const [selectedDivsBlock2, setSelectedDivsBlock2] = useState([]);
  const [showBlock2, setShowBlock2] = useState(false);
  const [showSum, setShowSum] = useState(false);
  const [sum, setSum] = useState(0);
  const [showOnline, setShowOnline] = useState(false);
  const { enrollment } = useEnrollment();

  const handleDivClickBlock1 = (value) => {
    if (selectedDivsBlock1.includes(value)) {
      setSelectedDivsBlock1([]);
      setShowBlock2(false);
      setShowSum(false);
      setSum(0);
    } else {
      setSelectedDivsBlock1([value]);
      if (value === onsiteNoHotelPrice) {
        setShowBlock2(true);
      } else {
        setShowBlock2(false);
      }
      if (value === onlinePrice) {
        setShowOnline(true);
      } else {
        setShowOnline(false);
      }
      if (selectedDivsBlock2.length > 0) {
        setSum(value + selectedDivsBlock2[0]);
        setShowSum(true);
      } else {
        setSum(value);
        setShowSum(false);
      }
    }
  };

  const handleDivClickBlock2 = (value) => {
    if (selectedDivsBlock2.includes(value)) {
      setSelectedDivsBlock2([]);
      setSum(selectedDivsBlock1[0]);
      setShowSum(false);
    } else {
      setSelectedDivsBlock2([value]);
      if (selectedDivsBlock1.length > 0) {
        setSum(value + selectedDivsBlock1[0]);
        setShowSum(true);
      } else {
        setSum(value);
        setShowSum(false);
      }
    }
  };

  const insertReserve = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(process.env.REACT_APP_API_BASE_URL + 'tickets', { ticketTypeId: onlinePriceId });
      props.setJumpPage(false);
      alert('Reserva concluída com sucesso');
    } catch (error) {
      alert(error);
    }
  };
  const insertReserveHotel = async(e) => {
    e.preventDefault();
    try {
      let res = undefined;
      if (sum === 250) {
        res = await axios.post(process.env.REACT_APP_API_BASE_URL + 'tickets', {
          ticketTypeId: onsiteNoHotelPriceId,
        });
      } else if (sum === 600) {
        res = await axios.post(process.env.REACT_APP_API_BASE_URL + 'tickets', {
          ticketTypeId: onsiteHotelPriceId,
        });
      }
      props.setJumpPage(false);
      alert('Reserva concluída com sucesso');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (onlineTicket && onsiteTicketNoHotel && onsiteTicketHotel) {
      setOnlinePrice(onlineTicket.price);
      setOnlinePriceId(onlineTicket.id);
      setOnsiteNoHotelPrice(onsiteTicketNoHotel.price);
      setOnsiteNoHotelPriceId(onsiteTicketNoHotel.id);
      setOnsiteHotelPrice(onsiteTicketHotel.price - onsiteTicketNoHotel.price);
      setOnsiteHotelPriceId(onsiteTicketHotel.id);
    }
  }, [onlineTicket, onsiteTicketNoHotel, onsiteTicketHotel]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <Block>
        <Title>Primeiro, escolha sua modalidade de ingresso</Title>

        <Tickets>
          <Div
            selected={selectedDivsBlock1.includes(onsiteNoHotelPrice)}
            onClick={() => handleDivClickBlock1(onsiteNoHotelPrice)}
          >
            <NotIsRemote>Presencial</NotIsRemote>
            <Value>R$ {onsiteNoHotelPrice}</Value>
          </Div>
          <Div selected={selectedDivsBlock1.includes(onlinePrice)} onClick={() => handleDivClickBlock1(onlinePrice)}>
            <IsRemote>Online</IsRemote>
            <Value>R$ {onlinePrice}</Value>
          </Div>
        </Tickets>
        {showOnline && (
          <>
            <TotalSum style={{ marginTop: '23px' }}>
              Fechado! O total ficou em <span style={{ fontWeight: '700' }}>R$ {onlinePrice}</span>. Agora é só
              confirmar:{' '}
            </TotalSum>
            <form onSubmit={insertReserve}>
              <Button>RESERVAR INGRESSO</Button>
            </form>
          </>
        )}
      </Block>
      {showBlock2 && (
        <>
          <Title style={{ marginTop: '44px' }}>Ótimo! Agora escolha sua modalidade de hospedagem</Title>
          <Tickets>
            <Div selected={selectedDivsBlock2.includes(0)} onClick={() => handleDivClickBlock2(0)}>
              <Hotel>Sem Hotel</Hotel>
              <Value>+ R$ 0</Value>
            </Div>
            <Div
              selected={selectedDivsBlock2.includes(onsiteHotelPrice)}
              onClick={() => handleDivClickBlock2(onsiteHotelPrice)}
            >
              <Hotel>Com Hotel</Hotel>
              <Value>+ R$ {onsiteHotelPrice}</Value>
            </Div>
          </Tickets>
          {showSum && (
            <>
              <TotalSum style={{ marginTop: '23px' }}>
                Fechado! O total ficou em <span style={{ fontWeight: '700' }}>R$ {sum}</span>. Agora é só confirmar:{' '}
              </TotalSum>
              <form onSubmit={insertReserveHotel}>
                <Button>RESERVAR INGRESSO</Button>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
}

const TicketTitle = styled.div``;
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
  border-color: #cecece;
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

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  background-color: ${(props) => (props.selected ? '#FFEED2' : 'white')};
  border: ${(props) => (props.selected ? '' : '1px solid #CECECE')};
  width: 145px;
  height: 145px;
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 20px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;

const TotalSum = styled.div`
  color: #8e8e8e;
  padding: 20px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding-left: 0px;
`;
const Title = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e8e8e;
  margin-bottom: 17px;
`;
const IsRemote = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #454545;
`;
const NotIsRemote = styled.p`
  color: #454545;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;
const Hotel = styled.p`
  color: #454545;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;
const Value = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #898989;
`;
const Tickets = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const Button = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  height: 37px;
  background: #e0e0e0;
  cursor: pointer;
  width: 162px;
`;
const Payment = styled.div``;
