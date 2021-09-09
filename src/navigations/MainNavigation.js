// Main Stack containing Home Tabs, Run Stack (Running and Pause Screen) and Summary Screen
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SummaryScreen from '../screens/Summary';
import HomeTabs from './HomeTabs';
import RunStack from './RunStack';

const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
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
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
