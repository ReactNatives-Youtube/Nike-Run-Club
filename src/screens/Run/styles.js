import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
export default styles = StyleSheet.create({
  container: {height: '100%', width: '100%'},
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
    borderColor: colors.toggleButtonBorder,
    marginTop: 28,
    backgroundColor: colors.toggleButtonBackground,
  },
  toggleTitle: {fontSize: 16, fontWeight: 'bold'},
  metricValue: {
    fontSize: 52,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    marginBottom: 4,
    alignSelf: 'center',
    flexShrink: 1,
    color: '#000',
  },
  metricUnit: {alignSelf: 'center', fontSize: 18, fontWeight: 'bold'},
  bottomContainer: {justifyContent: 'space-between', alignItems: 'center'},
  avatarTitle: {fontSize: 28, color: colors.avatarTitle, fontWeight: 'bold'},
  avatarContainer: {backgroundColor: colors.startButton},
});
