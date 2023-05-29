import styled from 'styled-components';
import Day from './day';

export default function ChooseDay(props) {
  const { days, setSelectedDay, selectedDay } = props;

  return (
    <>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <Days>
        {days.map((day) => (
          <div key={day} onClick={() => {setSelectedDay(day);}}>
            <Day date={day} setSelectedDay={setSelectedDay} selectedDay={selectedDay} />
          </div>
        ))}
      </Days>
    </>
  );
}

const SubTitle = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #8E8E8E;
`;

const Days = styled.div`
display: flex;
gap: 10px;
padding: 20px 0px;
`;
