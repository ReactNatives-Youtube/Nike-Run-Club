// Activity screen shown in our tabs screen

import React from 'react';
import {View, FlatList} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
const ActivityScreen = () => {
  const DATA = useSelector(state => state.previousRuns);
  const renderItem = ({item}) => (
    <ActivityCard
      day={item.day}
      timeOfDay={item.timeOfDay}
      distance={item.distance}
      time={item.time}
      cal={item.cal}
    />
  );

  return (
    <View style={{paddingHorizontal: 12}}>
      {DATA.length == 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center', height:"100%"}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            No Activity Found! Let's Start Running!!
          </Text>
        </View>
      ) : (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ActivityScreen;
