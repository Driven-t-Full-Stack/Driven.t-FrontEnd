import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChooseDay from './chooseDay';
import ActivitiesComponent from './activitiesContainer';
import getActivities from '../../../hooks/api/getActivities';

export default function Activities() {
  const [activitiesData, setActivitiesData] = useState([]);
  const { activities } = getActivities();
  const [days, setDays] = useState([]);

  useEffect(() => {
    if(activities) {
      setActivitiesData(activities);
    }
  }, [activities]);

  useEffect(() => {
    if(activitiesData.length > 0) {
      const uniqueDays = activitiesDays(activitiesData);
      setDays(uniqueDays);
    }
  }, [activitiesData]);
  
  const activitiesDays = (activities) => {
    const days = [];
    
    for(let i = 0; i < activities.length; i++) {
      if(!days.includes(activities[i].date)) {
        days.push(activities[i].date);
      }
    }

    return days;
  };

  return (
    <ActivitiesArea>
      <ChooseDay days={days} />
      <ActivitiesComponent />
    </ActivitiesArea>
  );
}

const ActivitiesArea = styled.div`
  width: 100%;
  height: 100%;
`;
