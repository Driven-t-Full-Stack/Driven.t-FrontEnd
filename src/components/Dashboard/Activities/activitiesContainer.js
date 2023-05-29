import { useState, useEffect } from 'react';
import styled from 'styled-components';
import getActvitiesInfo from '../../../hooks/api/getActivities';
import Activity from './activity';

export default function Activities(props) {
  const { selectedDate } = props;
  const { actvitiesInfo } = getActvitiesInfo();
  const [activitiesData, setActivitiesData] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState(null);

  useEffect(() => {
    if (actvitiesInfo) {
      setActivitiesData(actvitiesInfo);      
    }        
  }, [actvitiesInfo]);

  const handleSelectedDate = (info) => {
    setSelectedInfo(info);
  };

  return (
    <ActivitiesContainer>
      {activitiesData.map((info, index) => (
        <Activity 
          key={index}
          info={info}
          isSelected={selectedInfo === info}
          onClick={() => handleSelectedDate(info)}>
        </Activity>
      ))}
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
width: 100%;
height: 100%;
display: flex; 
justify-content: start;
`;
