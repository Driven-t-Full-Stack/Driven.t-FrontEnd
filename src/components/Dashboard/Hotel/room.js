import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import getBookings from '../../../hooks/api/getBookingByRoomId';
import person from '../../../assets/images/person.png';
import personBlack from '../../../assets/images/personBlack.png';
import personGray from '../../../assets/images/personGray.png';
import personPink from '../../../assets/images/personPink.png';

export const RoomComponent = ({ room, selected, onClick }) => {
  const [roomBookings, setRoomBookings] = useState([]);
  const { bookings } = getBookings(room.id);

  useEffect(() => {
    if (bookings) {
      setRoomBookings(bookings.map(() => true));
    }
  }, [bookings]);

  return (
    <Room
      key={room.id}
      hotel={room}
      selected={selected}
      onClick={onClick}
    >
      <p>{room.id}</p>
      <div>
        {Array(room.capacity).fill().map((_, index) => (
          <img
            key={index}
            src={roomBookings[index] ? personBlack : person}
            alt="person"
          />
        ))}
      </div>
    </Room>
  );
};

const Room = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 3px 0px;
  padding: 5px;
  box-sizing: border-box;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : 'white')};

  div {
    display: flex;
    justify-content: reverse;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #454545;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0px 3px;
  }
`; 
