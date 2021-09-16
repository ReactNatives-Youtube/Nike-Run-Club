import React, {useState, useRef} from 'react';
import {Platform} from 'react-native';
import {Image} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {View, Text, Pressable, TextInput, Keyboard} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
const SummaryScreen = () => {
  const [title, setTitle] = useState('Tuesday Morning Run');
  const [imageBackground, setImageBackground] = useState('green');
  // Function to change title input
  const titleChangeHandler = input => {
    setTitle(input);
  };

  // Reference to TextInput component
  const textInputRef = useRef();
  return (
    // Main Container
    <Pressable style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
      {/* Day-Time */}
      <Text style={styles.subheading}>Tuesday - 07:28</Text>
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
            <Text style={styles.kilometerValue}>2.22</Text>
            <Text style={styles.kilometerMetric}>Kilometers</Text>
          </View>
          {/* Metric pace, time and calories */}
          <View style={styles.metricContainer}>
            <View>
              <Text style={styles.metricValue}>10'59"</Text>
              <Text style={styles.metric}>Pace</Text>
            </View>
            <View>
              <Text style={styles.metricValue}>24:30</Text>
              <Text style={styles.metric}>Time</Text>
            </View>
            <View>
              <Text style={styles.metricValue}>116</Text>
              <Text style={styles.metric}>Calories</Text>
            </View>
          </View>
          {/* LOGO AND Progress bar */}
          <View style={styles.ImageLogoContainer}>
            <Image
              source={require('../../../assets/NRCLogo.png')}
              style={{...styles.image, backgroundColor: imageBackground}}
            />
            <Text>Progress bar</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default SummaryScreen;
