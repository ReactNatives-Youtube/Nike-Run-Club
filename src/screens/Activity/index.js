// Activity screen shown in our tabs screen

import React from 'react';
import {View, FlatList} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {useSelector} from 'react-redux';
const ActivityScreen = () => {
  const DATA = useSelector(state => state.previousRuns);
  const renderItem = ({item}) => (
    <ActivityCard
      day={item.day}
      timeOfDay={item.timeOfDay}
      distance={item.distance}
      time={item.time}
      cal={item.calories}
      totalKmRan={item.totalKmRan}
    />
  );

  return (
    <View style={{paddingHorizontal: 12}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ActivityScreen;
