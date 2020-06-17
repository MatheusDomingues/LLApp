import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { TouchableNativeFeedback } from 'react-native';

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

export default function Home({ focused }) {

  const navigation = useNavigation();

  function navigateToSignin() {
    navigation.navigate('Signin');
  }

  function navigateToSingup() {
    navigation.navigate('Signup');
  }

  return (
    <Wrapper>
      <Img source={imgHeader} />

      <Content>
        <Title>Welcome to the Fun of Languages!</Title>
        <Text>Dolore ea elit do Lorem aliquip. Do sint laboris Lorem quis 
          incididunt non velit. Aute adipisicing quis et elit.</Text>

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => navigateToSignin()}
            >
              <ButtonLogin style={{elevation: 4,}}>Sign in</ButtonLogin>
            </TouchableNativeFeedback>
          
            <TouchableNativeFeedback 
              onPress={() => navigateToSingup()}
            >
              <ButtonSignup style={{elevation: 4,}}>Create an account</ButtonSignup>
            </TouchableNativeFeedback>
        </Buttons>

        <Pages>
          <Page1 style={{elevation: 1,}}></Page1>
          <Page2 style={{elevation: 1,}}></Page2>
          <Page3 style={{elevation: 1,}}></Page3>
          <Page4 style={{elevation: 1,}}></Page4>
          <Page5 style={{elevation: 1,}}></Page5>
        </Pages>
      </Content>
    </Wrapper>
  );
}