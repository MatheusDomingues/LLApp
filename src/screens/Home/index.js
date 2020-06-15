import React from 'react';

import { 
  Wrapper,
  Img,
  Content,
  Text,
  Title,
  Buttons,
  ButtonLogin,
  ButtonSignup,
  Pages,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
} from './styles';

import imgHeader from '../../images/Header.png';

export default function Home() {
  return (
    <Wrapper>
      <Img source={imgHeader} />

      <Content>
        <Title>Welcome to the Fun of Languages!</Title>
        <Text>Dolore ea elit do Lorem aliquip. Do sint laboris Lorem quis 
          incididunt non velit. Aute adipisicing quis et elit.</Text>

        <Buttons>
          <ButtonLogin>Sign in</ButtonLogin>
          <ButtonSignup>Create an account</ButtonSignup>
        </Buttons>

        <Pages>
          <Page1></Page1>
          <Page2></Page2>
          <Page3></Page3>
          <Page4></Page4>
          <Page5></Page5>
        </Pages>
      </Content>
    </Wrapper>
  );
}