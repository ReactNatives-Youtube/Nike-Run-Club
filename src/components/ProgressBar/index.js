// Progress bar used in summary and running screen
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ProgressBar = ({
  prog,
  innerBorderColor,
  containerBorderColor,
  containerBgr,
  propStyles,
}) => {
  return (
    <View
      style={{
        ...styles.progressBarContainer,
        borderColor: containerBorderColor,
        backgroundColor: containerBgr,
        ...propStyles,
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
