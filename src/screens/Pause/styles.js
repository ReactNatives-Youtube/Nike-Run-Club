import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#fff'},
  mapContainer: {height: '30%', width: '100%'},
  metricMainContainer: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricInnerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricContainer: {alignItems: 'center'},
  metricValue: {fontSize: 32, fontWeight: 'bold'},
  metric: {color: '#999999'},
  secondMetricContainer: {alignItems: 'center', marginTop: 16},
  progressBarContainer: {padding: 40, alignItems: 'center'},
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  resumeButton: {backgroundColor: '#fe9836', marginLeft: 60},
  stopButton: {backgroundColor: '#000'},
});
