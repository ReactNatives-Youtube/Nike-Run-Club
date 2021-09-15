import React, {useState, useRef} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const SummaryScreen = () => {
  const [title, setTitle] = useState('Tuesday Morning Run');

  // Function to change title input
  const titleChangeHandler = input => {
    setTitle(input);
  };

  // Reference to TextInput component
  const textInputRef = useRef();
  return (
    // Main Container
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        borderTopWidth: 1,
        borderColor: '#ccc',
        padding: 20,
      }}>
      {/* Day-Time */}
      <Text style={{fontSize: 16, color: '#aaaaaa'}}>Tuesday - 07:28</Text>
      {/* TextInput- heading with pencil icon */}
      <Pressable
        style={{
          borderBottomWidth: 1,
          borderColor: '#ccc',
          paddingBottom: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => textInputRef.current.focus()}>
        <TextInput
          value={title}
          onChangeText={titleChangeHandler}
          style={{fontSize: 24, fontWeight: 'bold'}}
          ref={textInputRef}
        />
        <SimpleLineIcons name="pencil" size={20} />
      </Pressable>

      {/* Kilometers */}
      {/* Metric pace, time and calories */}
      {/* Progress bar */}
    </View>
  );
};

export default SummaryScreen;
