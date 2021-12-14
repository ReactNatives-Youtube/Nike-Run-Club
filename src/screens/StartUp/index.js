// First Screen of the application to sign in the user

import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Pressable,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Actions from '../../store/actions/index';
const StartUpScreen = () => {
  const [Loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const submitHandler = () => {
    if (name == '') {
      ToastAndroid.show('Enter a name', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);
    dispatch(Actions.get_user_data(name));
    setTimeout(
      () => navigation.reset({index: 0, routes: [{name: 'HomeTabs'}]}),
      2000,
    );
  };
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {Loading ? (
          <>
            <ActivityIndicator size={'large'} />
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Fetching Your Data
            </Text>
          </>
        ) : (
          <>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Sign In with your name*
            </Text>
            <TextInput
              value={name}
              onChangeText={text => setName(text.replace(/ /g, ''))}
              style={{
                fontWeight: 'bold',
                borderBottomWidth: 2,
                marginBottom: 4,
                alignSelf: 'center',
                flexShrink: 1,
                color: '#000',
                width: '40%',
                fontSize: 24,
              }}
            />
            <Pressable
              onPress={submitHandler}
              style={{
                padding: 12,
                backgroundColor: 'orange',
                borderRadius: 20,
                width: '80%',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
                Submit
              </Text>
            </Pressable>
          </>
        )}
      </View>
      <Text style={{alignSelf: 'center'}}>
        *Name should not contain any space
      </Text>
    </>
  );
};

export default StartUpScreen;
