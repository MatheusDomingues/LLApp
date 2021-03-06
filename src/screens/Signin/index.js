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
  ButtonLoginText,
  ButtonSignup,
  Pages,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
} from './styles';

import imgHeader from '../../images/Header.png';

export default function Signin() {

  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('Profile');
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
          style={{elevation: 2,}}
        ></TextInput>
        <Text>Senha</Text>
        <TextInput 
          placeholder={'Digite sua Senha'}
          keyboardType='numeric'
          secureTextEntry={true}
          style={{elevation: 2,}}
        ></TextInput>

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => navigateToProfile()}
            >
              <ButtonLogin style={{elevation: 2,}} title={'Sign in'}>
                <ButtonLoginText>Sign in</ButtonLoginText>
              </ButtonLogin>
            </TouchableNativeFeedback>
          
            <TouchableNativeFeedback 
              onPress={() => navigateToSingup()}
            >
              <ButtonSignup>Create an account</ButtonSignup>
            </TouchableNativeFeedback>
        </Buttons>

        <Pages>
          <Page1 style={{elevation: 1,}}></Page1>
          <Page2 style={{elevation: 1,}}></Page2>
          <Page3 style={{elevation: 1,}}></Page3>
          <Page4 style={{elevation: 1,}}></Page4>
          <Page5 style={{elevation: 1,}}></Page5>
          <Page6 style={{elevation: 1,}}></Page6>
        </Pages>
      </Content>
    </Wrapper>
  );
}