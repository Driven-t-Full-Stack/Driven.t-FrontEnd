import { useState, useEffect } from 'react';
import styled from 'styled-components';
import vacancy from '../../../assets/images/vacancy.png';

export default function Activity(props) {
  const info = props.info;

  const [selectedActivity, setSelectedActivity] = useState(null);
  const handleSelected = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <Local>
      <Title><p>info[0].location</p></Title>

      {info.map((activity, index) => (
        <ActivityDiv 
          key={index} 
          activity={activity}
          isSelected={setSelectedActivity === activity}
          onClick={() => handleSelected(activity)}
        >
          <ActivityText>
            <p><span>{activity.title}</span>
              {activity.start} - {activity.end}</p>
          </ActivityText>
          <VacancyDiv>
            <img src={vacancy} alt="vacancy"/>
            <p>{activity.availableSlots}</p>
          </VacancyDiv>
        </ActivityDiv>          
      ))}  
    </Local>
  );
}

const Local = styled.div`
width: 33%;
height: 100%;
padding: 5%;
`;

const Title = styled.div`
margin: 0px 0px 20px 0px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
text-align: center;
color: #7B7B7B;
}
`;

const ActivityDiv = styled.div`
padding: 15px;
gap: 15px;
background: #F1F1F1;
border-radius: 5px;
width: 100%;
height: 79px;
display: flex;
margin: 0px 0px 10px 0px;
`;

const ActivityText = styled.div`
width: 80%;
height: 100%;
gap: 5px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #343434;
}
span{
font-weight: 700;
}
`;

const VacancyDiv = styled.div`
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
img{
width: 15px;
height: 15px;
}
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #078632;
}
`;
