import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native';

import { 
  Wrapper,
  Img,
  Content,
  Text,
  TextInput,
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

export default function Signin() {

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
        <Text>Username</Text>
        <TextInput 
          placeholder={'Digite seu nome de Usuário'}
        ></TextInput>
        <Text>Senha</Text>
        <TextInput 
          placeholder={'Digite sua Senha'}
          keyboardType='numeric'
        ></TextInput>

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => navigateToSignin()}
            >
              <ButtonLogin>Sign in</ButtonLogin>
            </TouchableNativeFeedback>
          
            <TouchableNativeFeedback 
              onPress={() => navigateToSingup()}
            >
              <ButtonSignup>Create an account</ButtonSignup>
            </TouchableNativeFeedback>
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