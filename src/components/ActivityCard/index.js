/**
 * Reusable Activity Card for Activity Screen
 */

import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const ActivityCard = props => {
  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => console.log('Details of this page')}>
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
          <Text style={styles.metricValue}>{props.kilometer}</Text>
          <Text style={styles.metric}>Kilometer</Text>
        </View>
        {/* Avg pace */}
        <View>
          <Text style={styles.metricValue}>{props.avgPace}</Text>
          <Text style={styles.metric}>Avg. Pace</Text>
        </View>
        {/* Time */}
        <View>
          <Text style={styles.metricValue}>{props.time}</Text>
          <Text style={styles.metric}>Time</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ActivityCard;
