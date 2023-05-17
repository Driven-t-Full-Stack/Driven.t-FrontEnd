import styled from 'styled-components';
//import Rooms from './roomsArea';
//<Rooms />

export default function Hotel(props) {
  console.log(props);
  return (
    <>
      <Summary>
        <div>
          <img src={props.hotel.image} alt={`imagem de ${props.name}`}/>
          <HotelName>
            {props.hotel.name}
          </HotelName>
          <Description>
            <p>Tipos de acomodação:</p>
            <HotelProperties>Single, Double e Triple</HotelProperties>
            <p>Vagas disponíveis:</p>
            <HotelProperties>103</HotelProperties>
          </Description>
        </div>
      </Summary>
      
    </>
  );
}

const Summary = styled.div`
  width: 196px;
  height: 264px;
  background-color: #EBEBEB;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 15px;
  div{
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  img{
    width: 168px;
    height: 109px;
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
