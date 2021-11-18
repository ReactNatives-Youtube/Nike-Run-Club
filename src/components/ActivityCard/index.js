/**
 * Reusable Activity Card for Activity Screen
 */

import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  calculatePace,
  pacePresentation,
  secondsToHm,
} from '../../../constants/CalculationsPage';

const ActivityCard = props => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() =>
        navigation.navigate('Summary', {
          day: props.day,
          timeOfDay: props.timeOfDay,
          distance: props.distance,
          time: props.time,
          cal: props.cal,
          totalKmRan: props.totalKmRan,
        })
      }>
      {/* Inner Container 1 */}
      <View style={styles.innerContainer1}>
        {/* Image */}
        <Image
          source={{uri: 'https://i.stack.imgur.com/ddX9U.png'}}
          style={styles.image}
        />
        <View style={styles.headingContainer}>
          {/* Heading */}
          <Text style={styles.heading}>{props.day}</Text>
          {/* Subheading */}
          <Text style={styles.subheading}>
            {props.day} {props.timeOfDay} Run
          </Text>
        </View>
      </View>
      {/* Inner Container 2*/}
      <View style={styles.innerContainer2}>
        {/* Kilometer */}
        <View>
          <Text style={styles.metricValue}>{props.distance.toFixed(1)}</Text>
          <Text style={styles.metric}>Kilometer</Text>
        </View>
        {/* Avg pace */}
        <View>
          <Text style={styles.metricValue}>
            {pacePresentation(calculatePace(props.distance, props.time))}
          </Text>
          <Text style={styles.metric}>Avg. Pace</Text>
        </View>
        {/* Time */}
        <View>
          <Text style={styles.metricValue}>
            {secondsToHm(props.time).substring(0, 5)}
          </Text>
          <Text style={styles.metric}>Time</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ActivityCard;
