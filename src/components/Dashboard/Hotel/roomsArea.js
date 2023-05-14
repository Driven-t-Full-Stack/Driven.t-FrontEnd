import styled from 'styled-components';
import person from '../../../assets/images/person.png';
import personBlack from '../../../assets/images/personBlack.png';
import personGray from '../../../assets/images/personGray.png';
import personPink from '../../../assets/images/personPink.png';

export default function Rooms() {
  return <>
    <Title>Ótima pedida! Agora escolha seu quarto:</Title>
    <RoomsArea>
      <Room>
        <p>101</p>
        <People>
          <img src={person} alt="person" />
          <img src={personBlack} alt="person" />
          <img src={personGray} alt="person" />
          <img src={personPink} alt="person" />
        </People>
      </Room>
    </RoomsArea>
  </>;
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
    margin: 0px 2px;
}`;

const People = styled.div`
display: flex;
flex-direction: row-reverse;
`;
