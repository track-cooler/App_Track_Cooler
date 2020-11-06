import React, {useState, useEffect} from 'react';
import {Text, Keyboard, Alert, PermissionsAndroid} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BleManager} from 'react-native-ble-plx';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment';
import {Location} from '~/services/location';

// styles
import {Container, Input, Button, TextButton} from './styles';

// components
import CustomHeader from '~/components/CustomHeader';
import ToggleDefault from '~/components/Toggle';
import bluetoothIcon from '../../assets/bluetooth.png';
import locateIcon from '../../assets/locate.png';

function Settings({navigation}) {

  let location = new Location();
  // states
  const [userName, setUserName] = useState('');
  const [btStatus, setBluetooth] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(location.getLocationIsOn);

  const onToggleSwitch = async (state) => {
    if(state) {
      const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('permissão concedida');
          location.startLocation(state);

        } else {
          console.error('permissão negada');
        }
    }else {
        location.startLocation(state);
    }
  }

  useEffect(() => {
    getFontSizeFromStorage().then();
  });

  const bleManager = new BleManager();
  async function getStateBluetooth() {
    const status = (await bleManager.state()) === 'PoweredOn';
    return status;
  }

  const getStateGps = async () => {
    const status = await AsyncStorage.getItem('gpsStatus');
    return status ? status === 'true' : false;
  };

  const changeStateBlutooth = async (state) => {
    if (state) {
      await bleManager.enable();
    } else {
      await bleManager.disable();
    }
  };

  getStateBluetooth().then((status) => setBluetooth(status));

  const [fontSize, setFontSize] = useState('18px');

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
        <ToggleDefault
          text="Bluetooth"
          fontSize="24px"
          value={btStatus}
          icon={bluetoothIcon}
          onChange={(event) => {
            event.persist();
            changeStateBlutooth(event.nativeEvent.value).then(() => {
              setBluetooth(event.nativeEvent.value);
            });
          }}
        />

        <ToggleDefault
            text="Localização"
            fontSize="24px"
            value={isSwitchOn}
            icon={locateIcon}
            onChange={(event) => {
              event.persist();
              onToggleSwitch(event.nativeEvent.value).then(() => {
                setIsSwitchOn(event.nativeEvent.value);
              });
            }}
        />

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
