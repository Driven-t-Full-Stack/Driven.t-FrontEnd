import styled from 'styled-components';

export default function Day(props) {
  const { date, isSelected, onClick } = props;
  return (
    <>
      <DayContainer isSelected={isSelected} onClick={onClick}>
        <p>{date}</p>
      </DayContainer>
    </>
  );
}
  
const DayContainer = styled.div`
width: 131px;
height: 37px;
background-color: ${({ isSelected }) => (isSelected ? '#FFEED2' : '#E0E0E0')};
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
color: #000000;
}
`;
