import React, { useState, useEffect } from 'react';
import styled from'styled-components';
import Hotel from './hotel';
import ChangeRoom from './changeRoom';
import getHotels from '../../../hooks/api/getHotels';

export default function HotelsArea(props) {
  const [hotelsData, setHotelsData] = useState([]);
  const [hotelId, setHotelId] = useState(0);
  const { hotels } = getHotels();
  useEffect(() => {
    if(hotels) {
      setHotelsData(hotels);
    }
  }, [hotels]);

  return (
    <>
      <HotelSummary>
        <Title>Primeiro, escolha seu hotel</Title>
        <Summary>
          {hotelsData.map((hotel) => (
            <Hotel key={hotel.id} hotel={hotel} />
          ))}
        </Summary>
      </HotelSummary>
      <ChangeRoom></ChangeRoom>
    </>
  );
}

//
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
  display: flex;
  gap: 15px;
  img{
    width: 168px;
    height: 109px;
    margin: 10px 0px;
  }
`;
