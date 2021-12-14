/**
 * 1. Adding presentation functions
 * 2. When editing the title of the run it should be saved in redux and db
 */

import React, {useState, useRef, useEffect} from 'react';
import {Platform} from 'react-native';
import {Image} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {
  View,
  Text,
  Pressable,
  TextInput,
  Keyboard,
  Dimensions,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import {Levels} from '../../../constants/Levels';
import ProgressBar from '../../components/ProgressBar';
import colors from '../../../constants/colors';
import {
  calculatePace,
  pacePresentation,
  secondsToHm,
} from '../../../constants/CalculationsPage';
import {useSelector} from 'react-redux';
const SummaryScreen = ({route}) => {
  // Getting total Kms ran from redux
  const totalKmRan = useSelector(state => state.totalKms);
  // Hook to get the dimensions of the screen
  const {width, height} = Dimensions.get('window');
  // Props from each run
  const props = route.params;
  console.log(props);
  const [title, setTitle] = useState('');
  const [imageBackground, setImageBackground] = useState('green');
  const [nextLevelImageBackground, setNextLevelImageBackground] =
    useState('orange');
  const [progress, setProgress] = useState('20%');
  const [kilometerLeft, setKilometerLeft] = useState(0);
  // Function to change title input
  const titleChangeHandler = input => {
    setTitle(input);
  };

  // Function to calculate the Level of that user
  const calculateLevelHandler = totalKmRan => {
    for (let i = 0; i < Levels.length; i++) {
      if (Levels[i].kilometerRequired > totalKmRan) {
        setImageBackground(Levels[i - 1].level);
        setNextLevelImageBackground(Levels[i].level);
        let percentageDone = totalKmRan / Levels[i].kilometerRequired;
        setProgress(percentageDone * 100 + '%');
        setKilometerLeft(Levels[i].kilometerRequired - totalKmRan);
        return;
      }
      setImageBackground(Levels[i].level);
      setNextLevelImageBackground(Levels[i].level);
      let percentageDone = totalKmRan / Levels[i].kilometerRequired;
      setProgress(percentageDone * 100 + '%');
      setKilometerLeft(Levels[i].kilometerRequired - totalKmRan);
    }
  };
  // Reference to TextInput component
  const textInputRef = useRef();

  // This hook works only once
  useEffect(() => {
    const startTite = props.day + ' ' + props.timeOfDay + ' Run';
    setTitle(startTite);
    calculateLevelHandler(totalKmRan);
  }, []);

  return (
    // Main Container
    <Pressable style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
      {/* Day-Time */}
      <Text style={styles.subheading}>{props.day} - 07:28</Text>
      {/* TextInput- heading with pencil icon */}
      <Pressable
        style={styles.textInputContainer}
        onPress={() => textInputRef.current.focus()}>
        <TextInput
          value={title}
          onChangeText={titleChangeHandler}
          style={styles.textInput}
          ref={textInputRef}
        />
        <SimpleLineIcons name="pencil" size={20} />
      </Pressable>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={-100}>
        <View style={{flex: 1}}>
          {/* Kilometers */}
          <View style={{marginTop: 12}}>
            <Text style={styles.kilometerValue}>
              {props.distance.toFixed(1)}
            </Text>
            <Text style={styles.kilometerMetric}>Kilometers</Text>
          </View>
          {/* Metric pace, time and calories */}
          <View style={styles.metricContainer}>
            <View>
              <Text style={styles.metricValue}>
                {pacePresentation(calculatePace(props.distance, props.time))}
              </Text>
              <Text style={styles.metric}>Pace</Text>
            </View>
            <View>
              <Text style={styles.metricValue}>
                {secondsToHm(props.time).substring(0, 5)}
              </Text>
              <Text style={styles.metric}>Time</Text>
            </View>
            <View>
              <Text style={styles.metricValue}>{props.cal}</Text>
              <Text style={styles.metric}>Calories</Text>
            </View>
          </View>
          {/* LOGO AND Progress bar */}
          <View style={styles.ImageLogoContainer}>
            <Image
              source={require('../../../assets/NRCLogo.png')}
              style={{...styles.image, backgroundColor: imageBackground}}
            />
            <Image
              source={require('../../../assets/NRCLogo.png')}
              style={{
                ...styles.nextLevelImage,
                backgroundColor: nextLevelImageBackground,
                top: height * 0.24,
                left: width * 0.78,
              }}
            />
            <ProgressBar
              prog={progress}
              innerBorderColor={imageBackground}
              containerBorderColor={imageBackground}
              containerBgr={colors.summaryProgressBarContainerBackground}
            />
            <Text style={{marginTop: 12}}>
              {kilometerLeft} Km to Orange Level
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default SummaryScreen;
