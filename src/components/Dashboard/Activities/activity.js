import styled from 'styled-components';
import vacancy from '../../../assets/images/vacancy.png';

export default function Activity(props) {
  const { activityData } = props;

  return (
    <ActivityDiv>
      <ActivityText>
        <p><span>{activityData.title}</span></p>
        <p>09:00 - 10:00</p>
      </ActivityText>
      <VacancyDiv>
        <img src={vacancy} alt="vacancy"/>
        <p>{activityData.availableSlots}</p>
      </VacancyDiv>
    </ActivityDiv>
  );
}

const ActivityDiv = styled.div`
padding: 15px;
gap: 15px;
background: #F1F1F1;
border-radius: 5px;
width: 100%;
height: 80px;
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
color: #078632;
}
`;
