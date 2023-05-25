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
font-size: 20px;
text-align: center;
color: #8E8E8E;
margin: 32% 25% 0% 25%;
}
`;
