import styled from 'styled-components';
import Activity from './activity';

export default function Activities(props) {
  const { activitiesData, selectedDay } = props;
  const filteredActivities = activitiesData.filter(activity => (activity.date === selectedDay));

  const groupedActivities = filteredActivities.reduce((acc, activity) => {
    const { location } = activity;
    if (acc[location]) {
      acc[location].push(activity);
    } else {
      acc[location] = [activity];
    }
    return acc;
  }, {});

  return (
    <ActivitiesContainer>
      {Object.entries(groupedActivities).map(([location, activities]) => (
        <ActivityGroup key={location}>
          <LocationTitle><p>{location.replace(/_/g, ' ')}</p></LocationTitle>
          {activities.map(activity => (
            <Activity key={activity.id} activityData={activity} />
          ))}
        </ActivityGroup>
      ))}
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
  width: 100%;
  display: flex; 
  justify-content: start;
`;

const ActivityGroup = styled.div`
  width: 35%;
  height: 100%;
  padding: 5% 2.5%;
`;

const LocationTitle = styled.div`
  margin: 0px 0px 20px 0px;
  display: flex;
  justify-content: center;
  
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7B7B7B;
  }
`;
