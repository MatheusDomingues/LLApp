import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableNativeFeedback, CheckBox, Alert } from 'react-native';

import {
  Wrapper,
  TitleContent,
  Title,
  SubTitle,
  Text,
  Button,
  Content,
  TitleCreate,
  Input,
  Box,
  Buttons,
  ButtonSignup,
  ButtonSignupText,
  Pages,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
} from './styles'

export default function Signup() {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState(false);

  function onPressed() {
    setState({
       check: !state.check,
    });
  };

  function navigateToSignin() {
    navigation.navigate('Signin');
  };

  function navigateToSpeakLang() {
    if(!(username, email, password, phone) == '') {
      if(!state.check === false) {

        Alert.alert('Select which language do you want to learn: ')

        navigation.navigate('SpeakLang');

      } else {

        Alert.alert('Do you have to accept de terms and privacy policy');
      }

    } else {

      Alert.alert('All the fields must be filled');
    }
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>Create your free account</Title>
        <SubTitle>
          <Text>Do you already have an account?</Text>
          <TouchableNativeFeedback 
            onPress={() => navigateToSignin()}>
            <Button>Sign in</Button>
          </TouchableNativeFeedback>
        </SubTitle>
      </TitleContent>
      
      <Content>
        <TitleCreate>Username</TitleCreate>
        <Input 
          required='required'
          placeholder={'Ex: MatheusDomingues'} 
          maxLength={20}
          onChangeText={(value) => setUsername(value)}
          style={{elevation: 2,}}
        ></Input>

        <TitleCreate>E-mail</TitleCreate>
        <Input 
          keyboardType={'email-address'}
          required='required'
          autoCapitalize='none'
          placeholder='exemplo@exemplo.com'
          onChangeText={(value) => setEmail(value)}
          style={{elevation: 2,}}
        ></Input>

        <TitleCreate>Password</TitleCreate>
        <Input 
          keyboardType='numeric' 
          secureTextEntry={true}
          placeholder='**********' 
          required='required'
          onChangeText={(value) => setPassword(value)}
          style={{elevation: 2,}}
        ></Input>

        <TitleCreate>Phone number</TitleCreate>
        <Input 
          keyboardType='numeric' 
          placeholder='(19) 91919-1919' 
          required='required'
          onChangeText={(value) => setPhone(value)}
          style={{elevation: 2,}}
        ></Input>

        <Box>
          <CheckBox 
            required='required'
            value={state.check}
            onChange={() => onPressed()}
          />
          <Text>I accept the terms and privacy policy</Text>
        </Box>

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => navigateToSpeakLang()}
            >
              <ButtonSignup style={{elevation: 2,}} title={'Create my account'}>
                <ButtonSignupText>Create my account</ButtonSignupText>
              </ButtonSignup>
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