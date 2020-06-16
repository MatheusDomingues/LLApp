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
  Pages,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
} from './styles'

export default function Signup() {

  const navigation = useNavigation();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [state, setState] = useState(false);

  function onPressed() {
    setState({
       check: !state.check,
    });
  };

  function navigateToSignin() {
    navigation.navigate('Signin');
  };

  function createMyAccount() {
    if(!(username, email, password, phone) == '') {
      if(!state === false) {

        Alert.alert('Your account has been created!')

        navigation.navigate('LearnLang');

      } else {

        Alert.alert('Do you have to accept de terms and privacy policy');
      }

    } else {

      Alert.alert('Fill in all de fields');
    }
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>Create your free account</Title>
        <SubTitle>
          <Text>Do you already have an account?</Text>
          <TouchableNativeFeedback onPress={() => navigateToSignin()}>
            <Button>Sign in</Button>
          </TouchableNativeFeedback>
        </SubTitle>
      </TitleContent>
      
      <Content>
        <TitleCreate>Username</TitleCreate>
        <Input 
          required placeholder={'Ex: MatheusDomingues'} 
          maxLength={20}
          onChangeText={(value) => setUsername(value)}
        ></Input>

        <TitleCreate>E-mail</TitleCreate>
        <Input 
          keyboardType='email-address' 
          required 
          placeholder='exemplo@exemplo.com'
          onChangeText={(value) => setEmail(value)}
        ></Input>

        <TitleCreate>Password</TitleCreate>
        <Input 
          keyboardType='numeric' 
          passwordRules
          placeholder='**********' 
          required
          onChangeText={(value) => setPassword(value)}
        ></Input>

        <TitleCreate>Phone number</TitleCreate>
        <Input 
          keyboardType='numeric' 
          required placeholder='(19) 91919-1919' 
          onChangeText={(value) => setPhone(value)}
        ></Input>

        <Box>
          <CheckBox 
            required 
            value={state.check}
            onChange={() => onPressed()}
          />
          <Text>I accept the terms and privacy policy</Text>
        </Box>

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => createMyAccount()}
            >
              <ButtonSignup>Create my account</ButtonSignup>
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