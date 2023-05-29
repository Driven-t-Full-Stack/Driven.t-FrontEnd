import styled from 'styled-components';
import resort from '../../../assets/images/resort.png';
import getRooms from '../../../hooks/api/getRooms';
import getBookings from '../../../hooks/api/getBookingByRoomId';
import { useState, useEffect } from 'react';

export default function ChangeRoom(props) {
  const { roomName, hotelId, roomId, roomCapacity, setIsBooked } = props;
  const { Hotel } = getRooms(hotelId);
  const { bookings } = getBookings(roomId);
  const [ hotelName, setHotelName ] = useState(undefined);
  const [ hotelImg, setHotelImg ] = useState(undefined);
  const [ roomType, setRoomType ] = useState(null);
  const [roomBookings, setRoomBookings] = useState([]);
  const [ ocuppants, setOcuppants ] = useState(null);

  useEffect(() => {
    if (Hotel) {
      setHotelName(Hotel.name);
      setHotelImg(Hotel.image);
      acomodationType(roomCapacity);      
    }
    if (bookings) {
      setRoomBookings(bookings);
      roomOcuppacy(roomBookings.length);
    }
    console.log(ocuppants);
  }, [Hotel, roomType, bookings, ocuppants]);
  
  function acomodationType(roomCapacity) {
    if (roomCapacity == 1) {
      setRoomType('Single');
    } else if (roomCapacity == 2) {
      setRoomType('Double');
    } else if (roomCapacity == 3) {
      setRoomType('Triple');
    } else {
      setRoomType('Suite');
    }   
  };

  function roomOcuppacy(ocuppacy) {
    const numberOfPeople = ocuppacy - 1;
    if (ocuppacy == 1) {
      setOcuppants('Somente você!');
    } else{
      setOcuppants('Você e mais ' + numberOfPeople);
    }
  };

  return (
    <>
      <HotelSummary>
        <Title>Você já escolheu seu quarto:</Title>
        <Summary>
          <img src={hotelImg} alt="resort" />
          <HotelName>
            {hotelName}
          </HotelName>
          <Description>
            <p>Quarto reservado</p>
            <HotelProperties>{roomName} ({roomType})</HotelProperties>
            <p>Pessoas no seu quarto</p>
            <HotelProperties>{ocuppants}</HotelProperties>
          </Description>
        </Summary>
        <Accommodation onClick={() => {setIsBooked(true);}} >TROCAR DE QUARTO</Accommodation>
      </HotelSummary>
      
    </>
  );
}

const HotelSummary = styled.div`
width: 100%;
height: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  width: 196px;
  height: 264px;
  background-color: #FFEED2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 14px;

  img{
    width: 168px;
    height: 109px;
    margin: 10px 0px;
  }
`;

const Description = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
font-weight: 700;
  p {
    height: 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 12px;
    line-height: 23px;
  }
`;

const HotelName = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #3C3C3C;
`;

const HotelProperties = styled.p`
height: 23px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
margin-bottom: 10px;
`;

const Accommodation = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
width: 182px;
height: 37px;
background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #000000;
}
`;
