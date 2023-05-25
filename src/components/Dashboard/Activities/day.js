import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Day(props) {
  return (
    <>
      <DayContainer>
        <p>{props.date}</p>
      </DayContainer>
    </>
  );
}
  
const DayContainer = styled.div`
width: 131px;
height: 37px;
background-color: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
color: #000000;
}
`;
