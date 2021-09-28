/**
 * In this file we have the stack navigator assembled for the Start A Run screen
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RunningScreen from '../screens/Running';
import PauseScreen from '../screens/Pause';
const RunStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Running">
      <Stack.Screen
        name="Running"
        component={RunningScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Pause" component={PauseScreen} />
    </Stack.Navigator>
  );
};

export default RunStack;
