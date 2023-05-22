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
      const occupancy = bookings.length;
      setRoomBookings(Array(room.capacity).fill().map((_, index) => index < occupancy));
    }
  }, [bookings, room.capacity]);

  const isRoomFull = roomBookings.every(booking => booking);

  return (
    <Room
      full={isRoomFull}
      selected={selected}
      onClick={onClick}
    >
      <p>{room.id}</p>
      <div>
        {roomBookings.map((booking, index) => (
          <img
            key={index}
            src={booking ? personBlack : person}
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
  background-color: ${(props) => {
    if (props.full) {
      return '#E9E9E9';
    } else if (props.selected) {
      return '#FFEED2';
    } else {
      return 'white';
    }
  }};

  div {
    display: flex;
    justify-content: flex-end;
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

