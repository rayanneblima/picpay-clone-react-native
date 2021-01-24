import React from 'react';

import { Container, Option, Img, Label } from './styles';

import imgCredits from '../../images/01.png';
import imgUber from '../../images/02.png';
import imgTransporte from '../../images/03.png';
import imgSky from '../../images/04.png';
import imgDonation from '../../images/05.png';
import imgPayments from '../../images/06.png';
import imgQuestions from '../../images/07.png';

const items = [
  {
    key: String(Math.random()),
    img: imgCredits,
    label: "Recarga"
  },
  {
    key: String(Math.random()),
    img: imgUber,
    label: "Uber"
  },
  {
    key: String(Math.random()),
    img: imgTransporte,
    label: "Transporte"
  },
  {
    key: String(Math.random()),
    img: imgSky,
    label: "Sky"
  },
  {
    key: String(Math.random()),
    img: imgDonation,
    label: "Doações"
  },
  {
    key: String(Math.random()),
    img: imgPayments,
    label: "Pagamentos"
  },
  {
    key: String(Math.random()),
    img: imgQuestions,
    label: "Dúvidas"
  },
];

function Suggestions() {
  return(
    <Container>
      {items.map(item => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}

export default Suggestions;