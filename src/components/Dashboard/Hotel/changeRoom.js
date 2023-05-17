import styled from 'styled-components';
import resort from '../../../assets/images/resort.png';

export default function ChangeRoom() {
  return (
    <>
      <HotelSummary>
        <Title>Você já escolheu seu quarto:</Title>
        <Summary>
          <img src={resort} alt="resort" />
          <HotelName>
            Driven Resort
          </HotelName>
          <Description>
            <p>Quarto reservado</p>
            <HotelProperties>101 (Double)</HotelProperties>
            <p>Pessoas no seu quarto</p>
            <HotelProperties>Você e mais 1</HotelProperties>
          </Description>
        </Summary>
        <Accommodation>TROCAR DE QUARTO</Accommodation>
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
  border-radius: 10px;
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
