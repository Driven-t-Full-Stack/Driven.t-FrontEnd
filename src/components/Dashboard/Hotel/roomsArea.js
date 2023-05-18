import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import getRooms from '../../../hooks/api/getRooms';
import person from '../../../assets/images/person.png';
import personBlack from '../../../assets/images/personBlack.png';
import personGray from '../../../assets/images/personGray.png';
import personPink from '../../../assets/images/personPink.png';

export default function Rooms(props) {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Hotel } = getRooms(props.hotelId);
  
  useEffect(() => {
    if (Hotel) {
      setRooms(Hotel.Rooms);
      setIsLoading(false);
    }
  }, [Hotel]);
  
  let roomsContent = null;
  if (rooms.length > 0) {
    roomsContent = (
      <>
        <Title>Ótima pedida! Agora escolha seu quarto:</Title>
        <RoomsArea>
          {rooms.map((room) => (
            <Room key={room.id} hotel={room}>
              <p>101</p>
              <div>
                {Array(room.capacity).fill().map((_, index) => (
                  <img key={index} src={person} alt="person" />
                ))}
              </div>
            </Room>
          ))}
        </RoomsArea>
      </>
    );
  }
  
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : roomsContent}
      <Accommodation><p>RESERVAR QUARTO</p></Accommodation>
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
`;

const Room = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: 5px;
box-sizing: border-box;
width: 190px;
height: 45px;
border: 1px solid #CECECE;
border-radius: 10px;
div{
  display: flex;
  justify-content: reverse;
}
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #454545;
}
img{
    width: 20px;
    height: 20px;
    margin: 0px 3px;
}`;

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
