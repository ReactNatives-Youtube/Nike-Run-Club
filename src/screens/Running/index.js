/**
 * This screen is shown when you start a run
 */

import React from 'react';
import {View, Text} from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import {Avatar} from 'react-native-elements';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RunningScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.paceCalContainer}>
        {/* Pace */}
        <View style={styles.metricContainer}>
          <Text style={styles.metricValue}>-'--"</Text>
          <Text style={styles.metric}>Pace</Text>
        </View>
        {/* Calories */}
        <View style={styles.metricContainer}>
          <Text style={styles.metricValue}>--"</Text>
          <Text style={styles.metric}>Calories</Text>
        </View>
      </View>

      {/* Distance/Time metric set up */}
      <View style={styles.innerContainers}>
        <Text style={styles.mainMetric}>0.00</Text>
        <Text style={styles.metric}>Kilometers</Text>
      </View>
      {/* Progress bar */}
      <View style={styles.innerContainers}>
        <ProgressBar prog={'60%'} containerBgr={'#ccc'} />
      </View>
      {/* Pause Button */}
      <View style={styles.innerContainers}>
        <Avatar
          size={100}
          rounded
          icon={{name: 'pause'}}
          onPress={() => navigation.navigate('Pause')}
          activeOpacity={0.7}
          titleStyle={styles.avatarTitle}
          containerStyle={{backgroundColor: '#000'}}
        />
      </View>
    </View>
  );
};

export default RunningScreen;
