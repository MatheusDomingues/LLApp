import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

// import Home from './screens/Home';
// import Signin from './screens/Signin';
// import Signup from './screens/Signup';
import LearnLang from './screens/LearnLang';
// import SpeakLang from './screens/SpeakLang';
// import Level from './screens/Level';
// import Course from './screens/Course';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        {/* <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Signin" component={Signin} />
        <AppStack.Screen name="Signup" component={Signup} /> */}
        <AppStack.Screen name="LearnLang" component={LearnLang} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}