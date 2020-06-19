import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableNativeFeedback, Alert } from 'react-native';

import {
  Wrapper,
  TitleContent,
  Title,
  Content,
  Cards,
  Card,
  Image,
  Text,
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
} from './styles';

import brasil from '../../images/brazil.jpg';
import USA from '../../images/USA.jpg';
import china from '../../images/china.jpg';
import french from '../../images/franch.jpg';
import german from '../../images/german.jpg';
import italy from '../../images/italy.jpg';
import japan from '../../images/japon.jpg';
import russian from '../../images/russian.jpg';
import spanish from '../../images/spanish.jpg';

const DATA = [
  {
    image: brasil,
    id: 'Português (BR)',
  },
  {
    image: USA,
    id: 'English (USA)',
  },
  {
    image: china,
    id: 'Chinese',
  },
  {
    image: french,
    id: 'French',
  },
  {
    image: german,
    id: 'German',
  },
  {
    image: italy,
    id: 'Italian',
  },
  {
    image: japan,
    id: 'Japonese',
  },
  {
    image: russian,
    id: 'Russian',
  },
  {
    image: spanish,
    id: 'Spanish',
  },
]

function Item({ id, image, selected, onSelect }) {

  return (
    <Cards>
      <TouchableNativeFeedback 
        onPress={() => onSelect(id)}
      >
        <Card 
          style={{elevation: 2, 
            backgroundColor: 
              id === selected 
              ? '#FF6363' 
              : '#e8e8e8'}}>
          <Image source={image} />
          <Text>{id}</Text>
        </Card>
      </TouchableNativeFeedback >
    </Cards>
  );
};

export default function SpeakLang() {

  const navigation = useNavigation();

  const [speak, setSpeak] = useState('');

  const onSelect = (id) => {
    setSpeak(id);
  };

  function navigateToLearnLang() {
    if(!speak == '') {
      navigation.navigate('LearnLang');
      Alert.alert('Now, select which language do you want do learn');
    } else {
      Alert.alert('Select which language do you speak');
    };
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>I speak...</Title>
      </TitleContent>

      <Content>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.id}
              image={item.image}
              selected={speak}
              onSelect={onSelect}
            >
            </Item>
          )}
          keyExtractor={item => item.id}
          extraData={speak}
        />
        
        <Buttons >
            <TouchableNativeFeedback 
              onPress={() => navigateToLearnLang()}
            >
              <ButtonSignup style={{elevation: 2,}} title={'Next'}>
                <ButtonSignupText>Next</ButtonSignupText>
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
};