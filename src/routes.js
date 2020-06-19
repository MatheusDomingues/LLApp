import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import SpeakLang from './screens/SpeakLang';
import LearnLang from './screens/LearnLang';
import Level from './screens/Level';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Signin" component={Signin} />
        <AppStack.Screen name="Signup" component={Signup} />
        <AppStack.Screen name="SpeakLang" component={SpeakLang} />
        <AppStack.Screen name="LearnLang" component={LearnLang} />
        <AppStack.Screen name="Level" component={Level} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
};