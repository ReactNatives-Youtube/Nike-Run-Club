/**
 * In this file we have the tabs navigator assembled for the home screen
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActivityScreen from './Activity';
import RunScreen from './Run';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../../../constants/colors';
const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {color: colors.tabsColor, fontWeight: 'bold'},
        }}>
        <Tab.Screen
          name="Startarun"
          component={RunScreen}
          options={{
            tabBarLabel: 'Start A Run',
          }}
        />
        <Tab.Screen name="Activity" component={ActivityScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
