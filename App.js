/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ExamsScreen from './app/screens/Exams';
import HeyHome from './app/screens/HeyHome';
import Noise from './app/screens/Noise';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Exams"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Hey"
          options={{
            title: 'Celebrities',
          }}
          component={HeyHome}
        />
        <Stack.Screen name="Noise" component={Noise} />
        <Stack.Screen name="Exams" component={ExamsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
