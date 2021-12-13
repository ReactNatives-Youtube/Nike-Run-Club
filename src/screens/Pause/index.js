/**
 * This screen shown when you pause a run
 */

import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import GeoLocation from 'react-native-geolocation-service';
import {hasPermission} from '../../Hooks/LocationPermission';
import styles from './styles';
import ProgressBar from '../../components/ProgressBar';
import {
  calculatePace,
  getDayName,
  getTimeOfDay,
  pacePresentation,
  secondsToHm,
} from '../../../constants/CalculationsPage';
import * as Actions from '../../store/actions/index';
const PauseScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentRun = useSelector(state => state.currentRun);
  const runs = useSelector(state => state.previousRuns);
  console.log(runs);
  const [position, setPosition] = useState(null);
  const {calories, progressPercentage} = route.params;

  // function to get current location of user
  const getCurrentLocation = async () => {
    const locationPermission = await hasPermission();
    if (!locationPermission) return;

    GeoLocation.getCurrentPosition(
      position => {
        setPosition(position);
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

  // Functions to save run to redux store and db, also moving to summary screen
  const saveRun = () => {
    //Unique Id for each run
    const id = new Date().toISOString() + 'Nakul';
    dispatch(
      Actions.save_run_to_db({
        id: id,
        day: getDayName(),
        timeOfDay: getTimeOfDay(),
        distance: currentRun.distance,
        time: currentRun.time,
        cal: '0',
        totalKmRan: 220,
      }),
    );
    navigation.reset({
      index: 1,
      routes: [
        {name: 'HomeTabs'},
        {
          name: 'Summary',
          params: {
            day: getDayName(),
            timeOfDay: getTimeOfDay(),
            distance: currentRun.distance,
            time: currentRun.time,
            cal: calories,
            totalKmRan: 220,
          },
        },
      ],
    });
  };

  // This useEffect add listener to focus event
  useEffect(
    () =>
      navigation.addListener('focus', event => {
        getCurrentLocation();
      }),
    [navigation],
  );

  return (
    <View style={styles.mainContainer}>
      {/* Map View */}
      {/* Google Maps API/Image */}
      <View style={styles.mapContainer} pointerEvents="none">
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
      {/* Metrics */}

      <View style={styles.metricMainContainer}>
        {/* Kilometer and time */}
        <View style={styles.metricInnerContainer}>
          <View style={styles.metricContainer}>
            <Text style={styles.metricValue}>
              {currentRun.distance.toFixed(1)}
            </Text>
            <Text style={styles.metric}>Kilometers</Text>
          </View>
          <View style={styles.secondMetricContainer}>
            <Text style={styles.metricValue}>{calories}</Text>
            <Text style={styles.metric}>Calories</Text>
          </View>
        </View>
        {/* Calories and pace */}
        <View style={styles.metricInnerContainer}>
          <View style={styles.metricContainer}>
            <Text style={styles.metricValue}>
              {secondsToHm(currentRun.time).substring(0, 5)}
            </Text>
            <Text style={styles.metric}>Time</Text>
          </View>
          <View style={styles.secondMetricContainer}>
            <Text style={styles.metricValue}>
              {pacePresentation(
                calculatePace(currentRun.distance, currentRun.time),
              )}
            </Text>
            <Text style={styles.metric}>Pace</Text>
          </View>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        {/* Progress bar */}
        <ProgressBar
          prog={progressPercentage}
          containerBgr={'#ccc'}
          propStyles={{width: '90%'}}
          containerBorderColor={'#fff'}
        />
      </View>
      {/* Stop and Resume buttons */}
      <View style={styles.buttonsContainer}>
        <Avatar
          size={100}
          rounded
          icon={{name: 'stop'}}
          activeOpacity={0.7}
          containerStyle={styles.stopButton}
          onLongPress={saveRun}
          onPress={() =>
            ToastAndroid.show(
              'Press the button for 5 seconds to save and exit your run.',
              ToastAndroid.LONG,
            )
          }
        />
        <Avatar
          size={100}
          rounded
          // icon={{name: 'resume'}}
          activeOpacity={0.7}
          containerStyle={styles.resumeButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default PauseScreen;
