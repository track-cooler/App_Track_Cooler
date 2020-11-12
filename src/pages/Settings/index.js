import React, { useState, useEffect } from 'react';
import {
  Text,
  Keyboard,
  Alert,
  PermissionsAndroid,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { BleManager } from 'react-native-ble-plx';
import Geolocation from 'react-native-geolocation-service';
import Voice from '@react-native-community/voice';
import StringSimilarity from 'string-similarity';
import Tts from 'react-native-tts';
import moment from 'moment';
import {Location} from '~/services/location';

// styles
import { Container, Input, Button, TextButton } from './styles';

// components
import CustomHeader from '~/components/CustomHeader';
import ToggleDefault from '~/components/Toggle';
import FloatActionButton from '~/components/FloatActionButton';

// icons
import bluetoothIcon from '../../assets/bluetooth.png';
import locateIcon from '../../assets/locate.png';
import colorPalette from '../../assets/color-palette.png';
import micIcon from '../../assets/mic.png';

function Settings({ navigation }) {
  let location = new Location();

  // states
  const [userName, setUserName] = useState('');
  const [btStatus, setBluetooth] = useState(false);
  const [gpsStatus, setGpsStatus] = useState(false);
  const [constrast, setContrast] = useState(true);
  const [btnFirstColor, setBtnFirstColor] = useState('#A9BCD0');
  const [btnSecondColor, setBtnSecondColor] = useState('#218380');
  const [voiceStatus, setVoiceStatus] = useState(false);
  const [fontSize, setFontSize] = useState('18px');
  const [isSwitchOn, setIsSwitchOn] = useState(location.getLocationIsOn);

  useEffect(() => {
    getContrastStatus();
    getFontSizeFromStorage();
    getColor();
    checkVoiceIsEnabled();

    getStateBluetooth().then((status) => setBluetooth(status));
    getStateGps().then((status) => setGpsStatus(status));
    getStateVoice().then((status) => setVoiceStatus(status));
  
  });

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

  function initVoiceListeners() {
    Voice.onSpeechPartialResults = (e) => {
      console.log('onSpeechPartialResults');
      console.log(e);
    };

    Voice.onSpeechResults = (e) => {
      console.log('onSpeechResults')
      Voice.stop();
      const phrase = e.value;
      executeVoiceCommand(phrase);
    };
  }

  async function checkVoiceIsEnabled() {
    if (voiceStatus) {
      initVoiceListeners();
    }
  }

  async function executeVoiceCommand(phrase) {
    const phraseLowerCase = phrase[0].toLowerCase();
    const initialCommand = 'elsa';

    console.log('Elsa ouviu isto: ' + phraseLowerCase);

    if (phraseLowerCase === initialCommand) {
      Tts.speak('Você quer brincar na neve?');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `ligar bluetooth`) >= 0.95) {
      changeStateBlutooth(true);
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `desligar bluetooth`) >= 0.95) {
      changeStateBlutooth(false);
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `ativar localização`) >= 0.95) {
      changeStateGps(true);
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `desativar localização`) >= 0.95) {
      changeStateGps(false);
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `mudar letra para pequena`) >= 0.75) {
      setFontSizeSmall()
      Tts.speak('Mudando letra para pequena');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `mudar letra para normal`) >= 0.75) {
      setFontSizeNormal()
      Tts.speak('Mudando letra para normal');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `mudar letra para grande`) >= 0.75) {
      setFontSizeLarge()
      Tts.speak('Mudando letra para grande');
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `mudar nome para`) >= 0.75) {
      const userName = phraseLowerCase.split(' ').pop();
      await AsyncStorage.setItem('username', userName);
      Tts.speak(`Nome alterado para ${userName}`);
    } else if (StringSimilarity.compareTwoStrings(phraseLowerCase, `voltar`) >= 0.75) {
      goToPage('Home');
      Tts.speak(`Indo para menu`);
    } else if(StringSimilarity.compareTwoStrings(phraseLowerCase, `mudar constraste`) >= 0.75){
      changeContrast(constrast);
      Tts.speak(`Alterando o contraste`);
    } else {
      ToastAndroid.show('Não foi possível reconhecer o comando. Tente novamente', 2000);
      Tts.speak('Let it go! Desculpa, não te entendi. Por favor repita.');
    }
  }

  async function startVoice() {
    try {
      await Voice.start('pt-BR');
      const isRecognizing = await Voice.isRecognizing();
    } catch (e) {
      console.log('erro ao iniciar ' + e);
    }
  };

  async function goToPage(page) {
    navigation.navigate(page);
    Voice.removeAllListeners();
    console.log(await Voice.stop());
  }

  const bleManager = new BleManager();
  async function getStateBluetooth() {
    const status = (await bleManager.state()) === 'PoweredOn';
    return status;
  }

  const getStateGps = async () => {
    const status = await AsyncStorage.getItem('gpsStatus');
    return status ? status === 'true' : false;
  };

  async function getStateVoice() {
    const status = await AsyncStorage.getItem('voiceEnabled');
    return status ? status === 'true' : false;
  }

  const changeStateBlutooth = async (state) => {
    try {
      if (state != (await getStateBluetooth())) {
        if (state) {
          await bleManager.enable();
          if (voiceStatus) {
            Tts.speak('Ligando bluetooth.');
          }
        } else {
          await bleManager.disable();
          if (voiceStatus) {
            Tts.speak('Desligando bluetooth.');
          }
        }
      } else if (voiceStatus) {
        if (state) {
          Tts.speak('O Bluetooth está ligado.');
        } else {
          Tts.speak('O Bluetooth está desligado.');
        }
      }
      setBluetooth(state);
    } catch (e) { }

  };

  const changeStateGps = async (state) => {
    if (state != (await getStateGps())) {
      if (state) {
        const hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (hasPermission) {
          Geolocation.getCurrentPosition(
            async (position) => {
              await AsyncStorage.setItem('gpsStatus', 'true');
              changeStateGps(state);
              if (voiceStatus) {
                Tts.speak('Ativando GPS');
              }
            },
            (error) => {
              // eslint-disable-next-line no-alert
              alert('GPS do dispositivo desativado, por favor, ative-o.');
              if (voiceStatus) {
                Tts.speak('GPS do dispositivo desativado, por favor, ative-o.');
              }
            },
          );
        } else {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          changeStateGps(state);
          if (voiceStatus) {
            Tts.speak('Ativando GPS');
          }
        }
      } else {
        AsyncStorage.setItem('gpsStatus', 'false');
        setGpsStatus(false);
        if (voiceStatus) {
          Tts.speak('Desativando GPS');
        }
      }
    } else if (voiceStatus) {
      if (state) {
        Tts.speak('O GPS está ligado.');
      } else {
        Tts.speak('O GPS está desligado.');
      }
    }
  };

  const changeStateVoice = async (state) => {
    await AsyncStorage.setItem('voiceEnabled', `${state}`);
  };
  getStateBluetooth().then((status) => setBluetooth(status));

  const getFontSizeFromStorage = async () => {
    const fontSizeStorege = await AsyncStorage.getItem('fontSize');

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
  };

  const changeContrast = async (status) => {
    if (!status) {
      const whiteColor = await AsyncStorage.setItem('btnFirstColor', '#FFF');
      const blackColor = await AsyncStorage.setItem('btnSecondColor', '#000');

      const isOn = await AsyncStorage.setItem('contrastMode', 'true');

      setContrast(true);
      setBtnFirstColor('#FFF');
      setBtnSecondColor('#000');
    } else {
      const whiteColor = await AsyncStorage.setItem('btnFirstColor', '#A9BCD0');
      const blackColor = await AsyncStorage.setItem(
        'btnSecondColor',
        '#218380',
      );
      const isOff = await AsyncStorage.setItem('contrastMode', 'false');

      setContrast(false);
      setBtnFirstColor('#A9BCD0');
      setBtnSecondColor('#218380');
    }
  };

  const getContrastStatus = async () => {
    let status = await AsyncStorage.getItem('contrastMode');

    if (!status) {
      status = false;
    } else {
      status = status === 'true' ? true : false;
    }

    setContrast(status);
  };

  return (
    <>
      <CustomHeader />
      {voiceStatus ? <FloatActionButton icon={micIcon} onPress={() => startVoice()} /> : null}

      <ScrollView>
        <Container>
          <ToggleDefault
            text="Bluetooth"
            fontSize="24px"
            value={btStatus}
            icon={bluetoothIcon}
            onChange={(event) => {
              event.persist();
              changeStateBlutooth(event.nativeEvent.value);
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

          <ToggleDefault
            text="Voz"
            fontSize="24px"
            value={voiceStatus}
            icon={micIcon}
            onChange={(event) => {
              event.persist();
              changeStateVoice(event.nativeEvent.value).then(() => {
                setVoiceStatus(event.nativeEvent.value);
              });
            }}
          />

          <ToggleDefault
            text="Alterar Contraste"
            fontSize="24px"
            value={constrast}
            icon={colorPalette}
            onChange={() => {
              changeContrast(constrast);
            }}
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
