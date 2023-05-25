import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Day from './day';

export default function ChooseDay() {
  return (
    <>
      <SubTitle>Primeiro, filtre pelo dia do evento:</SubTitle>
      <Days>
        <Day date="Sexta, 22/10"></Day>
        <Day date="Sexta, 22/10"></Day>
        <Day date="Sexta, 22/10"></Day>
      </Days>
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

const Days = styled.div`
display: flex;
gap: 10px;
padding: 20px 0px;
`;
