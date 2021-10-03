import React from 'react';
import {View, Text} from 'react-native';
import MapView, { Circle } from 'react-native-maps';

const PauseScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      {/* Map View */}
      {/* Google Maps API/Image */}
      <View style={{height:"30%",width:"100%"}} pointerEvents="none">
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
      {/* Progress bar */}
      {/* Stop and Resume buttons */}
    </View>
  );
};

export default PauseScreen;
