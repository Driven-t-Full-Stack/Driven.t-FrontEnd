import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChooseDay from './chooseDay';

export default function ActivitiesComponent() {
  return (
    <ActivitiesAreaContainer>
      <ChooseDay></ChooseDay>
    </ActivitiesAreaContainer>
  );
}

const ActivitiesAreaContainer = styled.div`
  width: 100%;
  height: 100%;
`;

