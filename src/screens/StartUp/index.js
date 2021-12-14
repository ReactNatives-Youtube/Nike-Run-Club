import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Actions from '../../store/actions/index';
const StartUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(Actions.get_user_data());
    setTimeout(() => navigation.navigate('HomeTabs'), 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
      <Text>Fetching Your Data</Text>
    </View>
  );
};

export default StartUpScreen;
