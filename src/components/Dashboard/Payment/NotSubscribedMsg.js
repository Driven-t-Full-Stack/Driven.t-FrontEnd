import styled from 'styled-components';

export default function NotSubscribedMsg() {
  return (
    <StyledNotSubscribedMsg>
      <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
    </StyledNotSubscribedMsg>
  );
}

const StyledNotSubscribedMsg = styled.p`
p{ 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;  
line-height: 23px;  
font-size: 20px;
text-align: center;
color: #8E8E8E;
margin: 32% 25% 0% 25%;
}
`;
