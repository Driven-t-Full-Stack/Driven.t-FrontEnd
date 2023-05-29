import styled from 'styled-components';

export default function OnlineMsg() {
  return (
    <StyledOnlineMsg>
      <p>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</p>
    </StyledOnlineMsg>
  );
}

const StyledOnlineMsg = styled.p`
p{ 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;  
line-height: 23px;
font-size: 20px;
text-align: center;
color: #8E8E8E;
margin: 32% 20% 0% 20%;
}
`;
