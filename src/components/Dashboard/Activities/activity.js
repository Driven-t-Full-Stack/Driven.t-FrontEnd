import { useState, useEffect } from 'react';
import styled from 'styled-components';
import vacancy from '../../../assets/images/vacancy.png';
import noVacancy from '../../../assets/images/noVacancy.png';
import getTime from '../../../hooks/api/getTime';

export default function Activity(props) {
  const { activityData } = props;
  const { time } = getTime(activityData.timeId);
  const [ timeRender, setTimeRender ] = useState(null);

  useEffect(() => {
    if(time) {
      setTimeRender(time);
    }
  }, [time]);

  if (timeRender) {
    return (
      <ActivityDiv size={timeRender.end - timeRender.start} >
        <ActivityText>
          <p><span>{activityData.title}</span></p>
          <p>{`${timeRender.start}:00 - ${timeRender.end}:00`}</p>
        </ActivityText>
        <VacancyDiv available={activityData.availableSlots === 0} >
          <img src={(activityData.availableSlots === 0) ? noVacancy : vacancy} alt="vacancy"/>
          <p>{(activityData.availableSlots === 0) ? 'Esgotado' : activityData.availableSlots}</p>
        </VacancyDiv>
      </ActivityDiv>
    );
  } else {
    return <></>;
  }
}

const ActivityDiv = styled.div`
padding: 15px;
gap: 15px;
background: #F1F1F1;
border-radius: 5px;
width: 100%;
height: ${(props) => ((props.size) ? `${props.size * 80}px` : '80px')};
display: flex;
margin: 0px 0px 10px 0px;
`;

const ActivityText = styled.div`
width: 75%;
height: 80%;
gap: 5px;
display: flex;
flex-direction: column;

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
width: 25%;
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
color: ${(props) => ((props.available) ? '#CC6666' : '#078632')};
}
`;
