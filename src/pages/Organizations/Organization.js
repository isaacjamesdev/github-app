import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../../components/Header/Header'

const Organization = () =>(
  <View>
    <Header title= 'Organizations'/>
  </View>
)

Organization.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name='building' size={20} color={tintColor}/>
}

export default Organization;
