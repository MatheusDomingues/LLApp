import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableNativeFeedback, FlatList, Alert } from 'react-native';

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
              : '#eeeeee'}}>
          <Image source={image} />
          <Text>{id}</Text>
        </Card>
      </TouchableNativeFeedback >
    </Cards>
  );
};

export default function LearnLang() {

  const navigation = useNavigation();

  const [learn, setLearn] = useState('');

  const onSelect = (id) => {
    setLearn(id);
  };

  function navigateToLevel() {
    if(!learn == '') {
      navigation.navigate('Level');
    } else {
      Alert.alert('Select a language');
    };
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>I want to learn...</Title>
      </TitleContent>

      <Content>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.id}
              image={item.image}
              selected={learn}
              onSelect={onSelect}
            >
            </Item>
          )}
          keyExtractor={item => item.id}
          extraData={learn}
        />
        
        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => navigateToLevel()}
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