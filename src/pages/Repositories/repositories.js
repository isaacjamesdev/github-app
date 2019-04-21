import React, {Component} from 'react';
import { View, Text, AsyncStorage, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import propTypes from 'prop-types'
import Header from '../../components/Header/Header'
import api from '../../services/api'



Repository.propTypes = {
  tintColor: propTypes.string.isRequired
}

const tabIcon = ({tintColor}) => <Icon name='list-alt' size={20} color={tintColor}/>

Repository.navigationOptions = {
  tabBarIcon: tabIcon
}

const Repository = ()=> (
  <View>
    <Header title='Repositories'/>
  </View>
)

export default Repository
