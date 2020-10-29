import React, {useState, useEffect, useCallback} from 'react';
import {Keyboard, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// styles
import {Container, Input, Button, TextButton} from './styles';

// components
import CustomHeader from '~/components/CustomHeader';

function Settings({navigation}) {
  // states
  const [userName, setUserName] = useState('');
  const [fontSize, setFontSize] = useState('18px');

  useEffect(() => {
    getFontSizeFromStorage();
  });

  const getFontSizeFromStorage = async () => {
    const fontSizeStorege = await AsyncStorage.getItem('fontSize');
    console.log('TAMANHO NO ASYNC ', fontSizeStorege);

    setFontSize(fontSize);
  };

  const saveName = async () => {
    try {
      await AsyncStorage.setItem('username', userName);
      Keyboard.dismiss();
      Alert.alert('Sucesso', 'Nome de usuário salvo com sucesso!');
    } catch (e) {
      Alert.alert(e);
    }
  };

  const setFontSizeLarge = async () => {
    await AsyncStorage.setItem('fontSize', '22px');
    setFontSize('22px');
  };

  const setFontSizeNormal = async () => {
    await AsyncStorage.setItem('fontSize', '18px');
    setFontSize('18px');
  };

  const setFontSizeSmall = async () => {
    await AsyncStorage.setItem('fontSize', '16px');
    setFontSize('16px');
  };

  return (
    <>
      <CustomHeader />

      <Container>
        <Input
          fontSize={fontSize}
          placeholder="Digite um nome de usuário"
          onChangeText={(text) => setUserName(text)}
        />
        <Button onPress={saveName}>
          <TextButton fontSize={fontSize}>Salvar</TextButton>
        </Button>

        <Button onPress={setFontSizeSmall}>
          <TextButton fontSize={fontSize}>Letra pequena</TextButton>
        </Button>

        <Button onPress={setFontSizeNormal}>
          <TextButton fontSize={fontSize}>Letra normal</TextButton>
        </Button>

        <Button onPress={setFontSizeLarge}>
          <TextButton fontSize={fontSize}>Letra grande</TextButton>
        </Button>
      </Container>
    </>
  );
}

export default Settings;
