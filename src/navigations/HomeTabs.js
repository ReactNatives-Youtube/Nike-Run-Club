/**
 * In this file we have the tabs navigator assembled for the home screen
 */

import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RunScreen from '../screens/Run';
import ActivityScreen from '../screens/Activity';

const HomeTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
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
  );
};

export default HomeTabs;
