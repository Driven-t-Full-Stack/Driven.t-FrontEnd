import styled from 'styled-components';
import Rooms from './roomsArea';
import resort from '../../../assets/images/resort.png';

export default function HotelArea() {
  return (
    <>
      <HotelSummary>
        <Title>Primeiro, escolha seu hotel</Title>

        <Summary>
          <img src={resort} alt="resort" />
          <p>
            Driven Resort
          </p>
        </Summary>
      </HotelSummary>
      <Rooms />
    </>
  );
}

const HotelSummary = styled.div``;

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
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  padding-left: 4px;
  //justify-content: center;

  p {
    width: 120px;
    height: 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin: 10px;

    span {
      color: #898989;
    }
  }

  img{
    width: 168px;
    height: 109px;
    margin: 10px;
  }
`;
