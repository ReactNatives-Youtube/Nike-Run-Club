/**
 * Moving to summary page
 */

import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import ProgressBar from '../../components/ProgressBar';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const PauseScreen = ({route}) => {
  const navigation = useNavigation();
  const {time, kilometers, calories, pace, progressPercentage} = route.params;
  return (
    <View style={styles.mainContainer}>
      {/* Map View */}
      {/* Google Maps API/Image */}
      <View style={styles.mapContainer} pointerEvents="none">
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          minZoomLevel={18}
          style={{flex: 1, opacity: 0.6}}>
          <Circle
            center={{latitude: 37.78825, longitude: -122.4324}}
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
            <Text style={styles.metricValue}>{kilometers}</Text>
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
            <Text style={styles.metricValue}>{time}</Text>
            <Text style={styles.metric}>Time</Text>
          </View>
          <View style={styles.secondMetricContainer}>
            <Text style={styles.metricValue}>{pace}</Text>
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
          onLongPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'HomeTabs'}],
            })
          }
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
          icon={{name: 'resume'}}
          activeOpacity={0.7}
          containerStyle={styles.resumeButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default PauseScreen;
