import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { RoomComponent } from './room';
import getRooms from '../../../hooks/api/getRooms';
import useSaveBooking from '../../../hooks/api/useSaveBooking';

export default function Rooms(props) {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Hotel } = getRooms(props.hotelId);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    if (Hotel) {
      setRooms(Hotel.Rooms);
      setIsLoading(false);
    }
  }, [Hotel]);

  const { saveBooking } = useSaveBooking();

  const handleSaveBooking = async() => {
    try {
      await saveBooking({ roomId: roomId });
    } catch (error) {
      // Handle the error here (e.g., display an error message)      
      console.error('Error saving booking:', error);
    }
  };

  let roomsContent = null;
  if (rooms.length > 0) {
    roomsContent = (
      <>
        <Title>Ótima pedida! Agora escolha seu quarto:</Title>
        <RoomsArea>
          {rooms.map((room) => (
            <RoomComponent
              key={room.id}
              room={room}
              selected={roomId === room.id}
              onClick={() => setRoomId(room.id)}
            />
          ))}
        </RoomsArea>
      </>
    );
  }

  return (
    <>
      {isLoading ? <div>Loading...</div> : roomsContent}
      <Accommodation>
        <div onClick={() => handleSaveBooking({ roomId: roomId })}>
          <p>RESERVAR QUARTO</p>
        </div>
      </Accommodation>
    </>
  );
}

const Title = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #8E8E8E;
margin: 20px 0px;
`;

const RoomsArea = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 15px 0px;
gap: 15px;
`;

const Accommodation = styled.button`
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
div{
  height: 100%;
  width: 100%;
  display: flex;
justify-content: center;
align-items: center;
}
`;
