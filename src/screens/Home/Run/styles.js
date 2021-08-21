import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
export default styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  toggleContainer: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 28,
    borderColor: '#ccc',
    marginTop: 28,
  },
  toggleTitle: {fontSize: 14, fontWeight: 'bold'},
  metricValue: {
    fontSize: 48,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    marginBottom: 4,
    alignSelf: 'center',
    flexShrink: 1,
  },
  metricUnit: {alignSelf: 'center', fontSize: 16},
  bottomContainer: {justifyContent: 'space-between', alignItems: 'center'},
  avatarTitle: {fontSize: 28, color: '#000', fontWeight: 'bold'},
  avatarContainer: {backgroundColor: colors.startButton},
});
