import React, {useState, useEffect} from 'react';
import {
  Text,
  Keyboard,
  Alert,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BleManager} from 'react-native-ble-plx';
import Geolocation from 'react-native-geolocation-service';

// styles
import {Container, Input, Button, TextButton} from './styles';

// components
import CustomHeader from '~/components/CustomHeader';
import ToggleDefault from '~/components/Toggle';

// icons
import bluetoothIcon from '../../assets/bluetooth.png';
import locateIcon from '../../assets/locate.png';
import colorPalette from '../../assets/color-palette.png';

function Settings({navigation}) {
  // states
  const [userName, setUserName] = useState('');
  const [btStatus, setBluetooth] = useState(false);
  const [gpsStatus, setGpsStatus] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [btnFirstColor, setBtnFirstColor] = useState('#A9BCD0');
  const [btnSecondColor, setBtnSecondColor] = useState('#218380');

  useEffect(() => {
    getFontSizeFromStorage();
    getColor();
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

  const changeStateGps = async (state) => {
    if (state) {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          async (position) => {
            await AsyncStorage.setItem('gpsStatus', 'true');
          },
          (error) => {
            // eslint-disable-next-line no-alert
            alert('GPS do dispositivo desativado, por favor, ative-o.');
          },
        );
      } else {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        changeStateGps(state);
      }
    } else {
      AsyncStorage.setItem('gpsStatus', 'false');
    }
  };

  getStateBluetooth().then((status) => setBluetooth(status));
  getStateGps().then((status) => setGpsStatus(status));
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

  const getColor = async () => {
    const firstBtnColor = await AsyncStorage.getItem('btnFirstColor');
    const secondBtnColor = await AsyncStorage.getItem('btnSecondColor');

    setBtnFirstColor(firstBtnColor);
    setBtnSecondColor(secondBtnColor);
  }

  return (
    <>
      <CustomHeader />
      <ScrollView>
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
            value={gpsStatus}
            icon={locateIcon}
            onChange={(event) => {
              event.persist();
              changeStateGps(event.nativeEvent.value).then(() => {
                setGpsStatus(event.nativeEvent.value);
              });
            }}
          />

          <ToggleDefault
            text="Alterar Contraste"
            fontSize="24px"
            value={colorChange}
            icon={colorPalette}
            // onChange={() =>{}}
          />

          <Input
            fontSize={fontSize}
            placeholder="Digite um nome de usuário"
            onChangeText={(text) => setUserName(text)}
          />
          <Button btnColor={btnSecondColor} onPress={saveName}>
            <TextButton fontSize={fontSize}>Salvar</TextButton>
          </Button>

          <Button btnColor={btnSecondColor} onPress={setFontSizeSmall}>
            <TextButton fontSize={fontSize}>Letra pequena</TextButton>
          </Button>

          <Button btnColor={btnSecondColor} onPress={setFontSizeNormal}>
            <TextButton fontSize={fontSize}>Letra normal</TextButton>
          </Button>

          <Button btnColor={btnSecondColor} onPress={setFontSizeLarge}>
            <TextButton fontSize={fontSize}>Letra grande</TextButton>
          </Button>
        </Container>
      </ScrollView>
    </>
  );
}

export default Settings;
