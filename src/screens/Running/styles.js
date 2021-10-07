import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fe9836',
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  paceCalContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricContainer: {justifyContent: 'center', alignItems: 'center'},
  metricValue: {fontSize: 32, fontWeight: 'bold'},
  metric: {fontSize: 20, fontWeight: 'bold', color: '#a96528'},
  mainMetric: {fontSize: 100, fontWeight: 'bold'},
  avatarTitle: {fontSize: 28, fontWeight: 'bold'},
  innerContainers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
});
