import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableWithoutFeedback, TouchableNativeFeedback, Alert, StyleSheet } from 'react-native';

import {
  Wrapper,
  TitleContent,
  Title,
  Content,
  Cards,
  Card,
  Icon,
  Text,
  Buttons,
  ButtonSignup,
  Pages,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
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

export default function LearnLang() {

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

  const navigation = useNavigation();

  const [selected, setSelected] = React.useState(new Map());

  const onSelected = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  function navigateToSpeakLang() {
    if(!lang === '') {
      navigation.navigate('SpeakLang');
    } else {
      Alert.alert('Select one Language!');
    }
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>I want to learn...</Title>
      </TitleContent>

      <Content>
        <Cards>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              id={item.id}
              onPress={() => onSelected(id)}
              selected={!!selected.get(item.id)}
            >
              <Card style={{elevation: 2,}}>
                <Icon source={item.image} />
                <Text>{item.id}</Text>
              </Card>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={item => item.id}
          extraData={selected}
        />

        </Cards>

        <Buttons >
            <TouchableNativeFeedback 
              onPress={() => navigateToSpeakLang()}
            >
              <ButtonSignup style={{elevation: 4,}}>Next</ButtonSignup>
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
};