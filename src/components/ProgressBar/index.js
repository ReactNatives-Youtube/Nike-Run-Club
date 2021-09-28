// Progress bar used in summary and running screen
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ProgressBar = ({
  prog,
  innerBorderColor,
  containerBorderColor,
  containerBgr,
}) => {
  return (
    <View
      style={{
        ...styles.progressBarContainer,
        borderColor: containerBorderColor,
        backgroundColor: containerBgr,
      }}>
      <View
        style={{
          ...styles.progressBar,
          width: prog,
          borderColor: innerBorderColor,
        }}></View>
    </View>
  );
};

export default ProgressBar;
