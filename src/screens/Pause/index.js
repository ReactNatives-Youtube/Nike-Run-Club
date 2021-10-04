import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import ProgressBar from '../../components/ProgressBar';
import {Avatar} from 'react-native-elements';
const PauseScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Map View */}
      {/* Google Maps API/Image */}
      <View style={{height: '30%', width: '100%'}} pointerEvents="none">
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

      <View
        style={{
          padding: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* Kilometer and time */}
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>0.0</Text>
            <Text style={{color: '#999999'}}>Kilometers</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 16}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>0</Text>
            <Text style={{color: '#999999'}}>Calories</Text>
          </View>
        </View>
        {/* Calories and pace */}
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>00:00</Text>
            <Text style={{color: '#999999'}}>Time</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 16}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>0</Text>
            <Text style={{color: '#999999'}}>Pace</Text>
          </View>
        </View>
      </View>
      <View style={{padding: 40, alignItems: 'center'}}>
        {/* Progress bar */}
        <ProgressBar
          prog={'20%'}
          containerBgr={'#ccc'}
          propStyles={{width: '90%'}}
          containerBorderColor={'#fff'}
        />
      </View>
      {/* Stop and Resume buttons */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 40,
        }}>
        <Avatar
          size={100}
          rounded
          icon={{name: 'stop'}}
          activeOpacity={0.7}
          containerStyle={{backgroundColor: '#000'}}
        />
        <Avatar
          size={100}
          rounded
          icon={{name: 'resume'}}
          activeOpacity={0.7}
          containerStyle={{backgroundColor: '#fe9836', marginLeft: 60}}
        />
      </View>
    </View>
  );
};

export default PauseScreen;
