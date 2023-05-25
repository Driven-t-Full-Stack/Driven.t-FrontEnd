import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Activity from './activity';

export default function Activities() {
  return (
    <ActivitiesContainer>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
width: 100%;
height: 100%;
display: flex; 
justify-content: start;
`;
