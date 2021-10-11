/**
 * This screen is shown when you start a run
 *
 */

import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import {Avatar} from 'react-native-elements';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RunningScreen = ({route}) => {
  const navigation = useNavigation();
  const props = route.params;

  // States to maintain dynamic values
  const [timeValue, setTimeValue] = useState('00:00');
  const [kilometersValue, setKilometersValue] = useState('0.0');
  const [metric, setMetric] = useState('Kilometers');
  const [metricValue, setMetricValue] = useState('0.0');
  // Progress %
  const [progress, setProgress] = useState('0%');
  const [pace, setPace] = useState('-\'--"');
  const [calories, setCalories] = useState('--');
  // Target value set by the user
  const [targetValue, setTargetValue] = useState('0');

  // This state keeps check whether the screen is in focus or not
  const [inFocus, setInFocus] = useState(true);

  // This useeffect only once
  useEffect(() => {
    if (props.metric == 'Time') {
      setMetric('Hours:Minutes');
      setMetricValue('00:00');
    }
    setTargetValue(props.value);
  }, []);

  const backButtonCallback = useCallback(
    event => {
      // prevent default behavior
      event.preventDefault();

      // Alert to confirm his action
      Alert.alert(
        'Discarding Run',
        'Are you sure you want to discard this run?',
        [
          {text: 'No', style: 'cancel', onPress: () => {}},
          {
            text: 'Yes',
            style: 'destructive',
            onPress: () => navigation.dispatch(event.data.action),
          },
        ],
      );
    },
    [navigation],
  );

  // UseEffect runs only when the navigation back button is pressed
  useEffect(() => {
    if (inFocus) navigation.addListener('beforeRemove', backButtonCallback);
    return () => navigation.removeListener('beforeRemove', backButtonCallback);
  }, [navigation, inFocus]);

  // This useEffect add listener to focus event
  useEffect(
    () =>
      navigation.addListener('focus', event => {
        setInFocus(true);
      }),
    [navigation],
  );
  // This useEffect add listener to blur event
  useEffect(
    () =>
      navigation.addListener('blur', event => {
        setInFocus(false);
      }),
    [navigation],
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.paceCalContainer}>
        {/* Pace */}
        <View style={styles.metricContainer}>
          <Text style={styles.metricValue}>{pace}</Text>
          <Text style={styles.metric}>Pace</Text>
        </View>
        {/* Calories */}
        <View style={styles.metricContainer}>
          <Text style={styles.metricValue}>{calories}</Text>
          <Text style={styles.metric}>Calories</Text>
        </View>
      </View>

      {/* Distance/Time metric set up */}
      <View style={styles.innerContainers}>
        <Text style={styles.mainMetric}>{metricValue}</Text>
        <Text style={styles.metric}>{metric}</Text>
      </View>
      {/* Progress bar */}
      <View style={styles.innerContainers}>
        <ProgressBar prog={progress} containerBgr={'#ccc'} />
      </View>
      {/* Pause Button */}
      <View style={styles.innerContainers}>
        <Avatar
          size={100}
          rounded
          icon={{name: 'pause'}}
          onPress={() =>
            navigation.navigate('Pause', {
              time: timeValue,
              kilometers: kilometersValue,
              calories: calories,
              pace: pace,
              progressPercentage: progress,
            })
          }
          activeOpacity={0.7}
          titleStyle={styles.avatarTitle}
          containerStyle={{backgroundColor: '#000'}}
        />
      </View>
    </View>
  );
};

export default RunningScreen;
