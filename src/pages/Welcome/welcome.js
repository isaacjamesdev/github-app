import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import styles from './styles';
import api from '../../services/api'


export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false
  }

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username)
  }

  checkUserExists = async (username) => {
    const user = await api.get(`users/${username}`);
    return user;
  }

  signIn = async () => {
    const { username } = this.state;
    // navigation é uma props que é passada la no meu arquivo de routas.
    // já vem por padrão por causa dos módulos importados la.
    const { navigation } = this.props;
    try {
      this.setState({ loading: true })
      await this.checkUserExists(username);
      await this.saveUser(username);
      // navigate muda de pagina, passando nome da pagina
      navigation.navigate('Repositories');
    }
    catch (err) {
      this.setState({ loading: false, error: true })
    }
  }
  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>Type your username to continue</Text>
        {error && <Text style={styles.error}>User not found</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='username'
            underlineColorAndroid='transparent'
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size='small' color='#FFF' />
            ) : (
                <Text style={styles.buttonText}>Go</Text>
              )
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// - state, click(), verifica, salva, navigate
