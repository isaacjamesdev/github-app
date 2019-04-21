import './config/ReactotronConfig';
import React, { Component } from 'react';
import {AsyncStorage, View, Text} from 'react-native'
import CreateNavigator from './routes';



export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  }

  async componentDidMount(){
    const userName = await AsyncStorage.getItem('@Githuber:username');
    this.setState({
      userChecked: true,
      userLogged: !!userName,
    })
  }

  render() {
    const {userChecked, userLogged} = this.state;
    if(!userChecked) return null

    const Route = CreateNavigator(userLogged);

    return (
      // <Route/>
      <View><Text>porraa</Text></View>
    );
  }
}
