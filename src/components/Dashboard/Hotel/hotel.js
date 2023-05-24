import styled from 'styled-components';

export default function Hotel(props) {
  const { hotel, selectedHotelId, updateHotelId } = props;

  return (
    <>
      <Summary selected={selectedHotelId === hotel.id}>
        <div>
          <img src={hotel.image} alt={`imagem de ${hotel.name}`} />
          <HotelName>{hotel.name}</HotelName>
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
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#EBEBEB')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: left;
    gap: 10px;
  }

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-left:4px;
  }
`;

const Description = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
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
color: #3C3C3C;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
`;
