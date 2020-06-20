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
  ImageContent,
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

import beginner from '../../images/beginner.png';
import intermediate from '../../images/intermediate.png';
import advance from '../../images/advance.png';

const DATA = [
  {
    id: 'Beginner',
    image: beginner,
  },
  {
    id: 'Intermediate',
    image: intermediate,
  },
  {
    id: 'Advance',
    image: advance,
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
          <ImageContent>
            <Image source={image} />
          </ImageContent>
          <Text>{id}</Text>
        </Card>
      </TouchableNativeFeedback >
    </Cards>
  );
};

export default function Level() {
  
  const navigation = useNavigation();
  
  const [level, setLevel] = useState('');

  const onSelect = (id) => {
    setLevel(id)
  }

  function navegateToSignin() {
    if(!level == '') {
      navigation.navigate('Signin');

      Alert.alert('Congratulate! Your account has been created!');
    } else {
      Alert.alert('Select your level');
    };
  };

  return (
    <Wrapper>
      <TitleContent>
        <Title>Choose your level...</Title>
      </TitleContent>

      <Content>
        <FlatList 
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.id}
              image={item.image}
              selected={level}
              onSelect={onSelect}
            >
            </Item>
          )} 
          keyExtractor={item => item.id}
          extraData={level}
        />

        <Buttons>
            <TouchableNativeFeedback 
              onPress={() => navegateToSignin()}
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