import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Activities() {
  return (
    <ActivitiesAreaContainer>
      <Title>Escolha de atividades</Title>
    </ActivitiesAreaContainer>
  );
}

const ActivitiesAreaContainer = styled.div`
  width: 100%;
  height: 100%;
  
`;

const Title = styled.h1`
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 34px;
 line-height: 40px;
 color: #000000;
 height: auto;
 margin-bottom: 35px;
`;
