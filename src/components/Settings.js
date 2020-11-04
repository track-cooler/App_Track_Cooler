import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  Keyboard,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Settings extends Component {
  static navigationOption = {
    drawerLabel: 'Settings',

    drawerIcon: ({focused, tintColor}) => (
      <Image
        style={styles.logo}
        style2={{width: 40, height: 40}}
        source={require('../assets/settings.png')}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  gravarName = async () => {
    const STORAGE_KEY = '@save_username';
    try {
      await AsyncStorage.setItem(STORAGE_KEY, this.state.userName);
      Keyboard.dismiss();
      Alert.alert('Sucesso', 'Nome de usuário salvo com sucesso');
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Escolha um nome de usuário"
          onChangeText={(text) => this.setState({userName: text})}
        />

        <TouchableOpacity style={styles.botao} onPress={this.gravarName}>
          <Text style={styles.textBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBotao: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
