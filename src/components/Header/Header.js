import React,{Component} from 'React';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native'
import {withNavigation} from 'react-navigation'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles'

class Header extends Component{

  static PropTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired
  }

  logOut = async ()=>{
    const {navigation} = this.props
    await AsyncStorage.clear();
    navigation.navigate('Welcome')
  }

  render(){
    const {title} = this.props;
    return(
      <View style={styles.container}>
        <View/>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.logOut}>
          <Icon name='exchange' size={16} color={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Header);

