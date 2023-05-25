import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Day from './day';

export default function ChooseDay() {
  return (
    <>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <Day date="Sexta, 22/10"></Day>
      <Day date="Sexta, 22/10"></Day>
      <Day date="Sexta, 22/10"></Day>
    </>
  );
}

const SubTitle = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #8E8E8E;
`;

const days = styled.div`
dis
`