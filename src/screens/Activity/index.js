import React from 'react';
import {Text, View, FlatList} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {DATA} from '../../../constants/dummyData';
const ActivityScreen = () => {
  const renderItem = ({item}) => (
    <ActivityCard
      day={item.day}
      timeOfDay={item.timeOfDay}
      kilometer={item.kilometer}
      avgPace={item.avgPace}
      time={item.time}
      cal={item.calories}
      totalKm={item.totalKmRan}
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
