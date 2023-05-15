import React, { useState, useEffect } from 'react';
import styled from'styled-components';
import Hotel from '../../../pages/Dashboard/Hotel';
import ChangeRoom from './changeRoom';
import hotelApi from '../../../pages/';
import useAsync from '../../../hooks/useAsync';
import useToken from '../../../hooks/useAsync';

export default function HotelsArea(props) {
  const [hotelsData, setHotelsData] = useState([]);
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    run: getHotels
  } = useAsync(() => hotelApi.getHotels(token), []);
  
  useEffect(() => {
    if (hotels) {
      setHotelsData([...hotelsData, hotels]);
    }
    console.log(hotels);
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
  width: 196px;
  height: 264px;
  background-color: #EBEBEB;
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
  p {
    height: 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
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
