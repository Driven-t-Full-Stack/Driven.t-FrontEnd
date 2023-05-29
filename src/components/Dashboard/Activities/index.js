import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChooseDay from './chooseDay';
import ActivitiesComponent from './activitiesContainer';

export default function Activities() {
  return (
    <ActivitiesArea>
      <ChooseDay></ChooseDay>
      <ActivitiesComponent></ActivitiesComponent>
    </ActivitiesArea>
  );
}

const ActivitiesArea = styled.div`
  width: 100%;
  height: 100%;
`;
