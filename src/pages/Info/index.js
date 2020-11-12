import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, ToastAndroid} from 'react-native';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import StringSimilarity from 'string-similarity';

// api service
import api from '../../services/api';

// Components
import CustomHeader from '~/components/CustomHeader';
import BtnDefault from '~/components/BtnDefault';
import BtnRefresh from '~/components/BtnRefresh';
import FloatActionButton from '../../components/FloatActionButton'

// Styles
import {
  Container,
  ButtonsRow,
  Text,
  Title,
  Section,
  InfoText,
  Image,
  HistoryCard,
  ScrollContainer,
  ImageBat,
} from './styles';

// Icons
import refreshIcon from '../../assets/refresh.png';
import coolerIcon from '../../assets/cooler.png';
import termometroIcon from '../../assets/temperature.png';
import bateriaIcon from '../../assets/bateria.png';
import micIcon from '../../assets/mic.png';

function Info({navigation}) {
  const buttonFontSize = '10px';
  const buttonWidth = '20%';

  // states
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [coolerName, setCooleName] = useState('Nenhum');
  const [temperature, setTemperature] = useState();
  const [batteryLevel, setBatteryLevel] = useState();
  const [coolersRecords, setCoolersRecords] = useState([
    {
      name: 'Cooler 1',
    },
  ]);

  useEffect(() => {
    loadInfo();
    checkVoiceIsEnabled();
  });

  const loadInfo = async () => {
    try {
      const res = await api.get('/cooler-info');
      const info = res.data;

      console.log('\nDADOS', info);

      setCooleName(info.cooler_name);
      setBatteryLevel(info.battery_level);
      setTemperature(info.temperature);
    } catch (err) {
      console.log(err);
    }
  };

  async function udpdateInfo() {
    await loadInfo();
    alertInfo();
  }

  //Alert
  const alertInfo = async () => {
    try {
      Alert.alert('Sucesso!', 'Dados atualizados com sucesso!');
    } catch (e) {
      Alert.alert(e);
    }
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

  async function executeVoiceCommand(phrase) {
    const phraseLowerCase = phrase[0].toLowerCase();
    const initialCommand = 'elsa';

    console.log('Elsa ouviu isto: ' + phraseLowerCase);

    if (phraseLowerCase === initialCommand) {
      Tts.speak('Você quer brincar na neve?');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'status') >= 0.75
    ) {
      //goToStatus('Status');
      Tts.speak(`${coolerName} está conectado`);
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'temperatura') >= 0.75
    ) {
      //goToTemperature('Temperature');
      Tts.speak(`A temperatura do cooler é de ${temperature} graus Celsius`);
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'nível bateria') >=
      0.75
    ) {
      // goToBatteryLevel('Battery');
      Tts.speak(`O nível de bateria é de ${batteryLevel} por cento`);
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'histórico') >= 0.75
    ) {
      // goToHistoric('Historic');
      Tts.speak(`O último cooler a se conectar foi ${coolerName}`);
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'atualizar') >= 0.75
    ) {
      await udpdateInfo();
      Tts.speak('As informações foram atualizadas');
    } else if (
      StringSimilarity.compareTwoStrings(phraseLowerCase, 'voltar') >= 0.75
    ) {
      goToPage('Home');
      Tts.speak('Indo para menu');
    } else {
      ToastAndroid.show(
        'Não foi possível reconhecer o comando. Tente novamente',
        2000,
      );
      Tts.speak(' Desculpa, não te entendi. Por favor repita.');
    }
  }

  async function startVoice() {
    try {
      await Voice.start('pt-BR');
      const isRecognizing = await Voice.isRecognizing();
    } catch (e) {
      console.log('erro ao iniciar ' + e);
    }
  }

  async function goToPage(page) {
    navigation.navigate(page);
    Voice.removeAllListeners();
    console.log(await Voice.stop());
  }

  async function checkVoiceIsEnabled() {
    const isEnabled = (await AsyncStorage.getItem('voiceEnabled')) === 'true';
    if (isEnabled) {
      initVoiceListeners();
    }
    setVoiceEnabled(isEnabled);
  }

  return (
    <>
      <CustomHeader />
      {voiceEnabled ? (
        <FloatActionButton icon={micIcon} onPress={() => startVoice()} />
      ) : null}

      <Container>
        <ScrollContainer>
          <Title>
            <Image source={coolerIcon} />
            <Text fontSize="26px"> Informações Cooler</Text>
            <ButtonsRow>
              <BtnRefresh
                btnColor="#A9BCD0"
                fontSize={buttonFontSize}
                btnHeight="50px"
                btnWidth="50px"
                icon={refreshIcon}
                onPress={async () => await udpdateInfo()}
              />
            </ButtonsRow>
          </Title>
          <Section>
            <InfoText fontSize="20px"> Status: {coolerName} conectado</InfoText>
          </Section>
          <Section>
            <InfoText fontSize="20px"> Temperatura </InfoText>
            <Image source={termometroIcon} />
          </Section>
          <InfoText fontSize="40px"> {temperature}°C </InfoText>
          <Section>
            <InfoText fontSize="20px"> Nível Bateria </InfoText>
            <ImageBat source={bateriaIcon} />
          </Section>
          <InfoText fontSize="40px">{batteryLevel}%</InfoText>
          <Section>
            <InfoText fontSize="20px"> Histórico de Coolers </InfoText>
          </Section>
          {/* {coolersRecords.map((cooler, i) => (
            <HistoryCard key={i}>
              <Text fontSize="20px"> {cooler.name} </Text>
            </HistoryCard>
          ))} */}
          <HistoryCard>
            <Text fontSize="20px"> {coolerName} </Text>
          </HistoryCard>
        </ScrollContainer>
      </Container>
    </>
  );
}

export default Info;
