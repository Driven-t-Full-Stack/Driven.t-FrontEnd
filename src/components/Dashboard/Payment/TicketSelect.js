import { useState, useEffect } from 'react';
import styled from 'styled-components';
import getOnlineTicket from '../../../hooks/api/getOnlineTicket';
import getTicketWithOutHotel from '../../../hooks/api/getTicketWithOutHotel';
import getTicketWithHotel from '../../../hooks/api/getTicketWithHotel';

export default function TicketModality() {
  const [onlinePrice, setOnlinePrice] = useState(undefined);
  const [onsiteNoHotelPrice, setOnsiteNoHotelPrice] = useState(undefined);
  const { onlineTicket }  = getOnlineTicket();
  const { onsiteTicketNoHotel }  = getTicketWithOutHotel();
  const { onsiteTicketHotel }  = getTicketWithHotel();
  const [selectedDivsBlock1, setSelectedDivsBlock1] = useState([]);
  const [selectedDivsBlock2, setSelectedDivsBlock2] = useState([]);
  const [showBlock2, setShowBlock2] = useState(false);
  const [showSum, setShowSum] = useState(false);
  const [sum, setSum] = useState(0);
  const [showOnline, setShowOnline] = useState(false);

  const handleDivClickBlock1 = (value) => {
    if (selectedDivsBlock1.includes(value)) {
      setSelectedDivsBlock1([]);
      setShowBlock2(false);
      setShowSum(false);
      setSum(0);
    } else {
      setSelectedDivsBlock1([value]);
      if (value === 250) {
        setShowBlock2(true);
      } else {
        setShowBlock2(false);
      }
      if (value === 100) {
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
  
  useEffect(() => {
    if (onlineTicket && onsiteTicketNoHotel) {    
      setOnlinePrice(onlineTicket.price);
      setOnsiteNoHotelPrice(onsiteTicketNoHotel.price);
    }    
  }, [onlineTicket, onsiteTicketNoHotel]);  
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <Block>
        <Title>Primeiro, escolha sua modalidade de ingresso</Title>

        <Tickets>
          <Div selected={selectedDivsBlock1.includes(250)} onClick={() => handleDivClickBlock1(250)}>
            <NotIsRemote>
              Presencial
            </NotIsRemote>
            <Value>
              R$ 250
            </Value>
          </Div>
          <Div selected={selectedDivsBlock1.includes(100)} onClick={() => handleDivClickBlock1(100)}>
            <IsRemote>
              Online
            </IsRemote>
            <Value>
              R$ 100
            </Value>
          </Div>
        </Tickets>
        {showOnline &&
          (
            <>
              <TotalSum style={{ marginTop: '23px' }}>Fechado! O total ficou em <span style={{ fontWeight: '700' }}>R$ 100</span>. Agora é só confirmar: </TotalSum>
              <Button>RESERVAR INGRESSO</Button>
            </>
          )}
      </Block>
      {showBlock2 && (
        <>
          <Title style={{ marginTop: '44px' }}>Ótimo! Agora escolha sua modalidade de hospedagem</Title>
          <Tickets>
            <Div selected={selectedDivsBlock2.includes(0)} onClick={() => handleDivClickBlock2(0)}>
              <Hotel>
                Sem Hotel
              </Hotel>
              <Value>
                + R$ 0
              </Value>
            </Div>
            <Div selected={selectedDivsBlock2.includes(350)} onClick={() => handleDivClickBlock2(350)}>
              <Hotel>
                Com Hotel
              </Hotel>
              <Value>
                + R$ 350
              </Value>
            </Div>
          </Tickets>
          {showSum && (
            <>
              <TotalSum style={{ marginTop: '23px' }}>Fechado! O total ficou em <span style={{ fontWeight: '700' }}>R$ {sum}</span>. Agora é só confirmar: </TotalSum>
              <Button>RESERVAR INGRESSO</Button>
            </>
          )}
        </>
      )}

    </div>
  );
}

const TicketTitle = styled.div`
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

const Block = styled.div`
  display: flex;
  flex-direction:column;
`;

const Div = styled.div`
  background-color: ${(props) => (props.selected ? '#FFEED2' : 'white')};
  border: ${(props) => (props.selected ? '' : '1px solid #CECECE')};
  width: 145px;
  height: 145px;
  display: flex;
  gap:3px;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  cursor: pointer;
  border-radius:20px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;

const TotalSum = styled.div`
  color:#8E8E8E;
  padding: 20px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  padding-left:0px;
`;
const Title = styled.p`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color:#8E8E8E;
margin-bottom:17px;
`;
const IsRemote = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color:#454545;
`;
const NotIsRemote = styled.p`
  color:#454545;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;
const Hotel = styled.p`
  color:#454545;
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
  color:#898989;
`;
const Tickets = styled.div`
  display: flex;
  flex-direction:row;
  gap:24px;
`;
const Button = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  border:none;
  height: 37px;
  background: #E0E0E0;
  cursor: pointer;
  width: 162px;
`;
const Payment = styled.div``;
