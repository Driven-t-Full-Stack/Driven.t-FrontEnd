import React, { useState } from 'react';
import CreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';

export default function CreditCardData({ setIsPaid }) {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  function handleCardChange({ target }) {
    const { name, value } = target;

    setCardData((data) => ({ ...data, [name]: value }));
  }

  function onSubmit() {
    if (cardData.number.length !== 16 || isNaN(Number(cardData.number)))
      return alert('A numeração do cartão deve ter 16 dígitos numéricos.');

    if (cardData.name.length < 5) return alert('Favor digitar o nome completo.');

    if (cardData.expiry.length !== 4 || isNaN(Number(cardData.expiry)))
      return alert('A data de expiração deve ser um número de 4 dígitos.');

    if (cardData.cvc.length !== 3 || isNaN(Number(cardData.cvc)))
      return alert('O código de verificação deve ser um número de 3 dígitos.');

    setIsPaid(true);
  }

  return (
    <PaymentRequest>
      <CreditCardArea>
        <CreditCard number={cardData.number} name={cardData.name} expiry={cardData.expiry} cvc={cardData.cvc} />
        <CreditCardInformation>
          <Input
            type="text"
            name="number"
            maxLength={16}
            placeholder="Card Number"
            onChange={handleCardChange}
            isNumber={!isNaN(cardData.number)}
          />
          <Input
            type="text"
            name="name"
            minLength={5}
            placeholder="Name"
            onChange={handleCardChange}
            isNumber={!isNaN(cardData.name)}
            onBlur={(e) => (e.target.value = e.target.value.toUpperCase())}
          />
          <CreditCardSecondInformation>
            <Input
              type="text"
              name="expiry"
              maxLength={4}
              placeholder="Valid Thru"
              onChange={handleCardChange}
              isNumber={!isNaN(cardData.expiry)}
            />
            <span>
              <Input
                type="text"
                name="cvc"
                maxLength={3}
                placeholder="CVC"
                onChange={handleCardChange}
                isNumber={!isNaN(cardData.cvc)}
              />
            </span>
          </CreditCardSecondInformation>
        </CreditCardInformation>
      </CreditCardArea>

      <button onClick={onSubmit}>FINALIZAR PAGAMENTO</button>
    </PaymentRequest>
  );
}

const PaymentRequest = styled.div`
  button {
    width: 180px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    box-shadow: inset;

    color: #000;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
`;

const CreditCardArea = styled.div`
  width: 80%;
  margin-bottom: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CreditCardInformation = styled.form`
  margin-left: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.isNumber ? '#d4d4d4' : props.name === 'name' ? '#d4d4d4' : 'red')};
  background: #ffffff;

  color: #000;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  padding: 0px 10px;

  :hover {
    border-color: ${(props) => (props.isNumber ? '#000' : props.name === 'name' ? '#000' : 'red')};
  }
`;

const CreditCardSecondInformation = styled.span`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    margin-left: 15px;
  }
`;
