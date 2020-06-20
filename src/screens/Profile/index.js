import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native';

import { username, email, password, phone } from '../Signup';
import { speak } from '../SpeakLang';
import { learn } from '../LearnLang';
import { level } from '../Level';

import {
  Wrapper,
  TitleContent,
  Title,
  Content,
  ViewContent,
  View,
  Text,
  Bold,
  Buttons,
  Home,
  HomeText,
} from './styles';

export default function Profile() {

  const navigation = useNavigation();

  function backToHome() {
    navigation.navigate('Home')
  }

  return (
    <Wrapper>
      <TitleContent>
        <Title>PROFILE</Title>
      </TitleContent>
      <Content >
        <ViewContent style={{elevation: 2,}}>
          <View>
            <Text><Bold>Username: </Bold>{username}</Text>
          </View>

          <View>
            <Text><Bold>Email: </Bold>{email}</Text>
          </View>

          <View>
            <Text><Bold>Password: </Bold>{password}</Text>
          </View>

          <View>
            <Text><Bold>Phone Number: </Bold>{phone}</Text>
          </View>

          <View>
            <Text><Bold>Speak language: </Bold>{speak}</Text>
          </View>

          <View>
            <Text><Bold>Learn language: </Bold>{learn}</Text>
          </View>

          <View>
            <Text><Bold>Level of language: </Bold>{level}</Text>
          </View>
        </ViewContent>

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => backToHome()}
            >
              <Home style={{elevation: 2,}} title={'Home'}>
                <HomeText>Home</HomeText>
              </Home>
            </TouchableNativeFeedback>
        </Buttons>
      </Content>
    </Wrapper>
  );
}