import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hotel from './hotel';
import ChangeRoom from './changeRoom';
import getHotels from '../../../hooks/api/getHotels';
import Rooms from './roomsArea';

export default function HotelsArea(props) {
  const [hotelsData, setHotelsData] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const { hotels, error } = getHotels();

  useEffect(() => {
    if (hotels) {
      setHotelsData(hotels);
    }
  }, [selectedHotelId, hotels]);

  function updateHotelId(id) {
    setSelectedHotelId(id);
  }

  if (error) {
    return <ErrorContainer>An error occurred while fetching hotels. Please try again later.</ErrorContainer>;
  }

  return (
    <>
      <HotelSummary>
        <Title>Primeiro, escolha seu hotel</Title>
        <Summary>
          {hotelsData.map((hotel) => (
            <div key={hotel.id} onClick={() => updateHotelId(hotel.id)}>
              <Hotel hotel={hotel} selectedHotelId={selectedHotelId} updateHotelId={updateHotelId} />
            </div>
          ))}
        </Summary>
      </HotelSummary>
      {selectedHotelId ? <Rooms key={selectedHotelId} hotelId={selectedHotelId} /> : <></>}
      <ChangeRoom></ChangeRoom>
    </>
  );
}

//
const HotelSummary = styled.div`
width: 100%;
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
  overflow-x: auto;
  gap: 15px;
`;

const ErrorContainer = styled.div`
  color: red;
  font-weight: bold;
  margin: 20px;
`;
