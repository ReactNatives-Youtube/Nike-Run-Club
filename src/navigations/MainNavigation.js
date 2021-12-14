// Main Stack containing Home Tabs, Run Stack (Running and Pause Screen) and Summary Screen
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Pressable} from 'react-native';

import SummaryScreen from '../screens/Summary';
import HomeTabs from './HomeTabs';
import RunStack from './RunStack';
import colors from '../../constants/colors';
import StartUpScreen from '../screens/StartUp';
const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartUp">
        <Stack.Screen
          name="StartUp"
          component={StartUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RunStack"
          component={RunStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Summary"
          component={SummaryScreen}
          options={{
            headerStyle: {backgroundColor: colors.summaryHeader},
            headerRight: () => (
              <Pressable onPress={() => alert('Share this run')}>
                <Fontisto name="share" size={20} style={{marginRight: 12}} />
              </Pressable>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
