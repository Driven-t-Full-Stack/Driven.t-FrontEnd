import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Day from './day';
import getActvitiesDates from '../../../hooks/api/getActivitiesDates';

export default function ChooseDay(props) {
  const { activitiesDates } = getActvitiesDates();
  const [activitiesData, setActivitiesData] = useState([]);
  //const [selectedDate, setSelectedDate] = useState(null);
  const { selectedDate, setSelectedDate } = props;

  useEffect(() => {
    if (activitiesDates) {
      setActivitiesData(activitiesDates);      
    }        
  }, [activitiesDates]);

  const handleSelectedDate = (day) => {
    setSelectedDate(day);
  };
  
  return (
    <>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <Days>
        {activitiesData.map((date, index) => (
          <Day 
            key={index} 
            date={date}
            isSelected={selectedDate === date}
            onClick={() => handleSelectedDate(date)}
          />          
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
