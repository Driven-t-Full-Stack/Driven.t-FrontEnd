import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChooseDay from './chooseDay';
import ActivitiesComponent from './activitiesContainer';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <ActivitiesArea>
      <ChooseDay selectedDate={selectedDate} setSelectedDate={setSelectedDate}></ChooseDay>
      <ActivitiesComponent selectedDate={selectedDate}></ActivitiesComponent>
    </ActivitiesArea>
  );
}

const ActivitiesArea = styled.div`
  width: 100%;
  height: 100%;
`;
