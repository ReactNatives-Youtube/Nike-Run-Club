/**
 * The Run Screen component of home screen
 */

import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {Avatar} from 'react-native-elements';
import {validateInput} from '../../../../constants/Validation';
import styles from './styles';
const RunScreen = () => {
  // States:
  // 1. For metric value
  const [metricValue, setMetricValue] = useState('1.0');
  // 2. Toggling
  const [Toggle, setToggle] = useState('Distance');
  // 3. Metric Unit
  const [MetricUnit, setMetricUnit] = useState('Kilometers');

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

  return (
    <View style={styles.mainContainer}>
      {/* Google Maps API/Image */}
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
          onPress={() => console.warn('Works!')}
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
  );
};

export default RunScreen;
