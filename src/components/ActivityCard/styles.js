import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 12,
    backgroundColor: colors.cardBackground,
    marginVertical: 8,
    padding: 16,
    elevation: 1,
  },
  innerContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {width: 40, height: 40, borderRadius: 8},
  headingContainer: {marginLeft: 12},
  heading: {color: colors.cardHeading},
  subheading: {color: colors.cardSubHeading},
  innerContainer2: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricValue: {fontWeight: 'bold'},
  metric: {color: colors.cardMetric},
});
