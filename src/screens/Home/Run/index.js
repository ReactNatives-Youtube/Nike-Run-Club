import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {Avatar} from 'react-native-elements';
import { validateInput } from '../../../../constants/Validation';
import styles from './styles';
const RunScreen = () => {
  const [metricValue, setMetricValue] = useState('0.1'); 

  const changeMetricValueHandler = input => {
    // For distance
    // To round off the number to 1 decimal   eg:   2.5 / 2.0 /1.8 etc
    if (validateInput(input)) {
      setMetricValue(input);
    }
    // For time
   
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
        <Text style={styles.metricUnit}>Kilometer</Text>
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
