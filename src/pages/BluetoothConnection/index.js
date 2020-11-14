import React, {useState, useEffect} from 'react';
import {Alert, ToastAndroid} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';

// api service
import api from '../../services/api';

// Components
import CustomHeader from '~/components/CustomHeader';
import FloatActionButton from '~/components/FloatActionButton';

// Styles
import {
  Container,
  Text,
  Title,
  Image,
  ScrollContainer,
  Button,
  InfoText,
} from './styles';

// Icons
import micIcon from '../../assets/mic.png';
import bluetoothIcon from '../../assets/bluetooth.png';

function BluetoothConnection({navigation}) {
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [coolerName, setCoolerName] = useState('Nenhum');
  const [bluetoothList, setBluetoothList] = useState([
    {
      name: 'Celuar 1',
      mac: 'ABC4:EFGH:RTPT',
      pin: 12,
    },
    {
      name: 'Phone 300',
      mac: 'ABW4:EF23:RTPE',
      pin: 13,
    },
    {
      name: 'Track Cooler 1',
      mac: 'ABCD:EFGH:1234',
      pin: 123456,
    },
    {
      name: 'Phone 35',
      mac: 'AETY:EFGO:RTPE',
      pin: 14,
    },
    {
      name: 'Android 2',
      mac: 'QEWE:DJH3:RTPP',
      pin: 15,
    },
  ]);

  useEffect(() => {
    checkCooler();
    checkVoiceIsEnabled();
  });

  const checkCooler = async () => {
    const coolerName = await AsyncStorage.getItem('coolerName');

    if (!coolerName) {
      return setCoolerName('Nenhum');
    }

    setCoolerName(coolerName);
  };

  function initVoiceListeners() {
    Voice.onSpeechPartialResults = (e) => {
      console.log('onSpeechPartialResults');
      console.log(e);
    };

    Voice.onSpeechResults = (e) => {
      console.log('onSpeechResults');
      Voice.stop();
      const phrase = e.value;
      executeVoiceCommand(phrase);
    };
  }

  async function startVoice() {
    try {
      await Voice.start('pt-BR');
      const isRecognizing = await Voice.isRecognizing();
    } catch (e) {
      console.log('erro ao iniciar ' + e);
    }
  }

  async function checkVoiceIsEnabled() {
    const isEnabled = (await AsyncStorage.getItem('voiceEnabled')) === 'true';
    if (isEnabled) {
      initVoiceListeners();
    }
    setVoiceEnabled(isEnabled);
  }

  async function executeVoiceCommand(phrase) {
    const phraseLowerCase = phrase[0].toLowerCase();
    const initialCommand = 'elsa';

    console.log('Elsa ouviu isto: ' + phraseLowerCase);

    if (phraseLowerCase === initialCommand) {
      Tts.speak('Você quer brincar na neve?');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'status') >= 0.75
    ) {
      Tts.speak(`${coolerName} está conectado`);
    } else {
      ToastAndroid.show(
        'Não foi possível reconhecer o comando. Tente novamente',
        2000,
      );
      Tts.speak('Desculpa, não te entendi. Por favor repita.');
    }
  }

  const connectBluetooth = async (bluetoothName, pin) => {
    const data = {name: bluetoothName, pin};

    try {
      const res = await api.post('/bluetooth-connect', data);

      if (res.data.success) {
        await AsyncStorage.setItem('coolerName', bluetoothName);
        setCoolerName(bluetoothName);
      }

      if (voiceEnabled) {
        Tts.speak(res.data.message);
      }

      ToastAndroid.show(res.data.message, 2000);
    } catch (err) {
      console.log(err);

      ToastAndroid.show('Erro ao tentar conectar', 2000);
    }
  };

  return (
    <>
      <CustomHeader />
      {voiceEnabled ? (
        <FloatActionButton icon={micIcon} onPress={() => startVoice()} />
      ) : null}

      <Container>
        <Title>
          <Text fontSize="30px">Conectar Cooler</Text>
          <Image source={bluetoothIcon} />
        </Title>

        <InfoText fontSize="25px"> Status: {coolerName} conectado</InfoText>

        {bluetoothList.map((bluetooth, i) => (
          <Button
            key={i}
            onPress={async () =>
              await connectBluetooth(bluetooth.name, bluetooth.pin)
            }>
            <Text fontSize="20px">
              {' '}
              {bluetooth.name} {bluetooth.mac}
            </Text>
          </Button>
        ))}

        <ScrollContainer />
      </Container>
    </>
  );
}

export default BluetoothConnection;
