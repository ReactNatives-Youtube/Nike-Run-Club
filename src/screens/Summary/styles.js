import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.summaryBackgroundColor,
    flex: 1,
    borderTopWidth: 1,
    borderColor: colors.summaryBorder,
    padding: 20,
  },
  subheading: {fontSize: 16, color: colors.summarySubheading},
  textInputContainer: {
    borderBottomWidth: 1,
    borderColor: colors.summaryBorder,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {fontSize: 24, fontWeight: 'bold'},
  kilometerValue: {fontSize: 80, fontWeight: 'bold'},
  kilometerMetric: {fontSize: 16, color: colors.summarySubheading},
  metricContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricValue: {fontSize: 24, fontWeight: 'bold'},
  metric: {color: colors.summaryMetric, fontSize: 16},
  ImageLogoContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {height: 100, width: 80},
});
