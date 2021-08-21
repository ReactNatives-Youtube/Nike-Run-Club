import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from './styles';
const RunScreen = () => {
  const [metricValue, setMetricValue] = useState('0.1');

  const changeMetricValueHandler = input => {
    setMetricValue(input);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Google Maps API/Image */}
      {/* Metric - Button to change the metric value*/}
      <Pressable onPress={() => console.warn('Open Modal and change value')}>
        <TextInput
          style={styles.metricValue}
          keyboardType="decimal-pad"
          value={metricValue}
          onChangeText={changeMetricValueHandler}
        />
        <Text style={styles.metricUnit}>Kilometer</Text>
      </Pressable>
      {/* Start Button */}
      <View style={styles.bottomContainer}>
        <Avatar
          size={120}
          rounded
          title="START"
          onPress={() => console.warn('Works!')}
          activeOpacity={0.7}
          titleStyle={styles.avatarTitle}
          containerStyle={styles.avatarContainer}
        />
        {/* Toggle button to change the metric from distance or time */}
        <Pressable
          onPress={() => console.warn('Toggling')}
          style={styles.toggleContainer}>
          <Text style={styles.toggleTitle}>Distance</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RunScreen;
