import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import {metrics, colors} from '../../styles/'


const styles = StyleSheet.create({
  container:{
    height: 54 + getStatusBarHeight(),
    padding: getStatusBarHeight(),
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderBottomColor: colors.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding

  },
  title:{
    fontSize: 16,
    color: colors.darker,
    fontWeight: 'bold'
  },
  icon:{
    color: colors.darker,
  }
})

export default styles;
