import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native';

import {
  Wrapper,
  TitleContent,
  Title,
  SubTitle,
  Text,
} from './styles'

export default function Signup() {

  const navigation = useNavigation();

  function navigateToSignin() {
    navigation.navigate('Signin');
  };

  function createMyAccount() {
    navigation.navigate('LearnLang');
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>Create yoyur free account</Title>
        <SubTitle>Do you already have an account?
          <TouchableNativeFeedback>
            <Text>Sign in</Text>
          </TouchableNativeFeedback>
        </SubTitle>
      </TitleContent>
    </Wrapper>
  );
}