/**
 * The Home Screen
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import {Avatar} from 'react-native-elements';
import GeoLocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';
import {validateInput} from '../../../constants/Validation';
import styles from './styles';
import {hasPermission} from '../../Hooks/LocationPermission';
import {ToastAndroid} from 'react-native';

const RunScreen = () => {
  // Ref for interval
  const interval = useRef(null);

  // Initialize navigation hook
  const navigation = useNavigation();

  // States:
  // 1. For metric value
  const [metricValue, setMetricValue] = useState('1.0');
  // 2. Toggling
  const [Toggle, setToggle] = useState('Distance');
  // 3. Metric Unit
  const [MetricUnit, setMetricUnit] = useState('Kilometers');

  // 4. Keeping track of position (lat and long)
  const [position, setPosition] = useState(null);

  // function to get current location of user
  const getLocation = async () => {
    const locationPermission = await hasPermission();
    if (!locationPermission) return;

    GeoLocation.getCurrentPosition(
      position => {
        setPosition(position);
        console.log(position);
      },
      error => {
        setPosition(null);
        ToastAndroid.show(
          "We couldn't fetch your location. Please check your device location service!",
          ToastAndroid.LONG,
        );
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
      },
    );
  };

  // Helper function to make changes to the text input
  const changeMetricValueHandler = input => {
    if (validateInput(input, Toggle)) {
      if (input[0] == '.' || input[0] == ':') {
        input = '0' + input;
      }
      if (input[input.length - 1] == '.' || input[input.length - 1] == ':') {
        input = input + '0';
      }
      setMetricValue(input);
    }
  };

  // Toggle Function
  const toggleHandler = () => {
    if (Toggle == 'Distance') {
      setToggle('Time');
      setMetricUnit('Hours : Minutes');
      setMetricValue('01:00');
    } else {
      setToggle('Distance');
      setMetricUnit('Kilometers');
      setMetricValue('1.0');
    }
  };

  // useEffect triggered whenever the screen is in focus
  useEffect(() => {
    navigation.addListener('focus', event => {
      interval.current = setInterval(() => getLocation(), 30000);
      getLocation();
    });

    return () => clearInterval(interval.current);
  }, [navigation]);

  // useEffect triggered whenever the screen is out of focus
  useEffect(() => {
    navigation.addListener('blur', event => {
      clearInterval(interval.current);
      interval.current = null;
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {/* Google Maps API/Image */}
      <View style={styles.container} pointerEvents="none">
        <MapView
          region={{
            latitude: position?.coords.latitude || 37.78825,
            longitude: position?.coords.longitude || -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          minZoomLevel={18}
          style={{flex: 1, opacity: 0.6}}>
          <Circle
            center={{
              latitude: position?.coords.latitude || 37.78825,
              longitude: position?.coords.longitude || -122.4324,
            }}
            radius={4}
            fillColor="red"
          />
        </MapView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          ...styles.mainContainer,
        }}>
        {/* Metric - Button to change the metric value*/}
        <View>
          <TextInput
            style={styles.metricValue}
            keyboardType="decimal-pad"
            value={metricValue}
            onChangeText={changeMetricValueHandler}
          />
          <Text style={styles.metricUnit}>{MetricUnit}</Text>
        </View>
        {/* Start Button */}
        <View style={styles.bottomContainer}>
          <Avatar
            size={120}
            rounded
            title="START"
            onPress={() =>
              navigation.navigate('RunStack', {
                screen: 'Running',
                params: {targetValue: metricValue, metric: Toggle},
              })
            }
            activeOpacity={0.7}
            titleStyle={styles.avatarTitle}
            containerStyle={styles.avatarContainer}
          />
          {/* Toggle button to change the metric from distance or time */}
          <Pressable onPress={toggleHandler} style={styles.toggleContainer}>
            <Text style={styles.toggleTitle}>{Toggle}</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RunScreen;
